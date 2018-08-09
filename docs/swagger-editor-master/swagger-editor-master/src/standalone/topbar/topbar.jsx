import React from "react"
import PropTypes from "prop-types"
import Swagger from "swagger-client"
import "whatwg-fetch"
import DropdownMenu from "./DropdownMenu"
import Modal from "boron/DropModal"
import reactFileDownload from "react-file-download"
import YAML from "@kyleshockey/js-yaml"
import beautifyJson from "json-beautify"

import "react-dd-menu/dist/react-dd-menu.css"
import "./topbar.less"
import Logo from "./logo_small.png"

class OAS3GeneratorMessage extends React.PureComponent {
  render() {
    const { isShown } = this.props

    if(!isShown) {
      return null
    }

    return <div onClick={this.props.showModal} className="long-menu-message">
      Beta feature; click for more info.
    </div>
  }
}

export default class Topbar extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      swaggerClient: null,
      clients: [],
      servers: [],
      definitionVersion: "Unknown"
    }
  }

  getGeneratorUrl = () => {
    const { isOAS3, isSwagger2 } = this.props.specSelectors
    const { swagger2GeneratorUrl, oas3GeneratorUrl } = this.props.getConfigs()

    return isOAS3() ? oas3GeneratorUrl : (
      isSwagger2() ? swagger2GeneratorUrl : null
    )
  }

  instantiateGeneratorClient = () => {

    const generatorUrl = this.getGeneratorUrl()

    if(!generatorUrl) {
      return this.setState({
        clients: [],
        servers: []
      })
    }

    Swagger(generatorUrl, {
      requestInterceptor: (req) => {
        req.headers["Accept"] = "application/json"
        req.headers["Content-Type"] = "application/json"
      }
    })
    .then(client => {
      this.setState({
        swaggerClient: client
      })
      client.apis.clients.clientOptions({}, {
        // contextUrl is needed because swagger-client is curently
        // not building relative server URLs correctly
        contextUrl: generatorUrl
      })
      .then(res => {
        this.setState({ clients: res.body || [] })
      })
      client.apis.servers.serverOptions({}, {
        // contextUrl is needed because swagger-client is curently
        // not building relative server URLs correctly
        contextUrl: generatorUrl
      })
      .then(res => {
        this.setState({ servers: res.body || [] })
      })
    })
  }

  downloadFile = (content, fileName) => {
    return reactFileDownload(content, fileName)
  }

  // Menu actions

  importFromURL = () => {
    let url = prompt("Enter the URL to import from:")

    if(url) {
      fetch(url)
        .then(res => res.text())
        .then(text => {
          this.props.specActions.updateSpec(
            YAML.safeDump(YAML.safeLoad(text), {
              lineWidth: -1
            })
          )
        })
    }
  }

  importFromFile = () => {
    let fileToLoad = this.refs.fileLoadInput.files.item(0)
    let fileReader = new FileReader()

    fileReader.onload = fileLoadedEvent => {
      let textFromFileLoaded = fileLoadedEvent.target.result
      this.props.specActions.updateSpec(YAML.safeDump(YAML.safeLoad(textFromFileLoaded)))
      this.hideModal()
    }

    fileReader.readAsText(fileToLoad, "UTF-8")
  }

  saveAsYaml = () => {
    let editorContent = this.props.specSelectors.specStr()
    let language = this.getDefinitionLanguage()
    let fileName = this.getFileName()

    if(this.hasParserErrors()) {
      if(language === "yaml") {
        const shouldContinue = confirm("Swagger-Editor isn't able to parse your API definition. Are you sure you want to save the editor content as YAML?")
        if(!shouldContinue) return
      } else {
        return alert("Save as YAML is not currently possible because Swagger-Editor wasn't able to parse your API definiton.")
      }
    }

    if(language === "yaml") {
      //// the content is YAML,
      //// so download as-is
      return this.downloadFile(editorContent, `${fileName}.yaml`)
    }

    //// the content is JSON,
    //// so convert and download

    // JSON String -> JS object
    let jsContent = YAML.safeLoad(editorContent)
    // JS object -> YAML string
    let yamlContent = YAML.safeDump(jsContent)
    this.downloadFile(yamlContent, `${fileName}.yaml`)
  }

  saveAsJson = () => {
    let editorContent = this.props.specSelectors.specStr()
    let fileName = this.getFileName()

    if(this.hasParserErrors()) {
      // we can't recover from a parser error in save as JSON
      // because we are always parsing so we can beautify
      return alert("Save as JSON is not currently possible because Swagger-Editor wasn't able to parse your API definiton.")
    }

    // JSON or YAML String -> JS object
    let jsContent = YAML.safeLoad(editorContent)
    // JS Object -> pretty JSON string
    let prettyJsonContent = beautifyJson(jsContent, null, 2)
    this.downloadFile(prettyJsonContent, `${fileName}.json`)
  }

  saveAsText = () => {
    // Download raw text content
    console.warn("DEPRECATED: saveAsText will be removed in the next minor version.")
    let editorContent = this.props.specSelectors.specStr()
    let isOAS3 = this.props.specSelectors.isOAS3()
    let fileName = isOAS3 ? "openapi.txt" : "swagger.txt"
    this.downloadFile(editorContent, fileName)
  }

  convertToYaml = () => {
    // Editor content -> JS object -> YAML string
    let editorContent = this.props.specSelectors.specStr()
    let jsContent = YAML.safeLoad(editorContent)
    let yamlContent = YAML.safeDump(jsContent)
    this.props.specActions.updateSpec(yamlContent)
  }

  downloadGeneratedFile = (type, name) => {
    let { specSelectors } = this.props
    let swaggerClient = this.state.swaggerClient
    if(!swaggerClient) {
      // Swagger client isn't ready yet.
      return
    }

    if(specSelectors.isOAS3()) {
      swaggerClient.apis.default.generate1({}, {
        requestBody: {
          spec: specSelectors.specJson(),
          options: {
            lang: name
          }
        },
        contextUrl: this.getGeneratorUrl()
      }).then(res => {
        this.downloadFile(res.data, `${name}-${type}-generated.zip`)
      })
    } else if(type === "server") {
      swaggerClient.apis.servers.generateServerForLanguage({
        framework : name,
        body: JSON.stringify({
          spec: specSelectors.specJson()
        }),
        headers: JSON.stringify({
          Accept: "application/json"
        })
      })
        .then(res => this.handleResponse(res, { type, name }))
    } else if(type === "client") {
      swaggerClient.apis.clients.generateClient({
        language : name,
        body: JSON.stringify({
          spec: specSelectors.specJson()
        })
      })
        .then(res => this.handleResponse(res, { type, name }))
    }
  }

  handleResponse = (res, { type, name }) => {
    if(!res.ok) {
      return console.error(res)
    }

    fetch(res.body.link)
      .then(res => res.blob())
      .then(res => {
        this.downloadFile(res, `${name}-${type}-generated.zip`)
      })
  }

  clearEditor = () => {
    if(window.localStorage) {
      window.localStorage.removeItem("swagger-editor-content")
      this.props.specActions.updateSpec("")
    }
  }

  // Helpers

  showModal = (name) => {
    name = typeof name === "string" ? name : null
    this.refs[name || "modal"].show()
  }

  hideModal = (name) => {
    name = typeof name === "string" ? name : null
    this.refs[name || "modal"].hide()
  }

  // Logic helpers

  hasParserErrors = () => {
    return this.props.errSelectors.allErrors().filter(err => err.get("source") === "parser").size > 0
  }

  getFileName = () => {
    // Use `isSwagger2` here, because we want to default to `openapi` if we don't know.
    if(this.props.specSelectors.isSwagger2 && this.props.specSelectors.isSwagger2()) {
      return "swagger"
    }

    return "openapi"
  }

  getDefinitionLanguage = () => {
    let editorContent = this.props.specSelectors.specStr() || ""

    if(editorContent.trim()[0] === "{") {
      return "json"
    }

    return "yaml"
  }


  getDefinitionVersion = () => {
    const { isOAS3, isSwagger2 } = this.props.specSelectors

    return isOAS3() ? "OAS3" : (
      isSwagger2() ? "Swagger2" : "Unknown"
    )
  }

  ///// Lifecycle

  componentDidMount() {
    this.instantiateGeneratorClient()
  }

  componentDidUpdate() {
    const version = this.getDefinitionVersion()

    if(this.state.definitionVersion !== version) {
      // definition version has changed; need to reinstantiate
      // our Generator client
      // --
      // TODO: fix this if there's A Better Way
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        definitionVersion: version
      }, () => this.instantiateGeneratorClient())

    }
  }

  render() {
    let { getComponent, specSelectors: { isOAS3 } } = this.props
    const Link = getComponent("Link")

    let showServersMenu = this.state.servers && this.state.servers.length
    let showClientsMenu = this.state.clients && this.state.clients.length

    let definitionLanguage = this.getDefinitionLanguage()

    let isJson = definitionLanguage === "json"

    let makeMenuOptions = (name) => {
      let stateKey = `is${name}MenuOpen`
      let toggleFn = () => this.setState({ [stateKey]: !this.state[stateKey] })
      return {
        isOpen: !!this.state[stateKey],
        close: () => this.setState({ [stateKey]: false }),
        align: "left",
        toggle: <span className="menu-item" onClick={toggleFn}>{ name }</span>
      }
    }

    const saveAsElements = []

    if(isJson) {
      saveAsElements.push(<li><button type="button" onClick={this.saveAsJson}>Save as JSON</button></li>)
      saveAsElements.push(<li><button type="button" onClick={this.saveAsYaml}>Convert and save as YAML</button></li>)
    } else {
      saveAsElements.push(<li><button type="button" onClick={this.saveAsYaml}>Save as YAML</button></li>)
      saveAsElements.push(<li><button type="button" onClick={this.saveAsJson}>Convert and save as JSON</button></li>)
    }

    return (
      <div>
        <div className="topbar">
          <div className="topbar-wrapper">
            <Link href="#">
              <img height="30" width="30" className="topbar-logo__img" src={ Logo } alt=""/>
              <span className="topbar-logo__title">Swagger Editor</span>
            </Link>
            <DropdownMenu {...makeMenuOptions("File")}>
              <li><button type="button" onClick={this.importFromURL}>Import URL</button></li>
              <li><button type="button" onClick={this.showModal}>Import File</button></li>
              <li role="separator"></li>
              {saveAsElements}
              <li role="separator"></li>
              <li><button type="button" onClick={this.clearEditor}>Clear editor</button></li>
            </DropdownMenu>
            <DropdownMenu {...makeMenuOptions("Edit")}>
              <li><button type="button" onClick={this.convertToYaml}>Convert to YAML</button></li>
            </DropdownMenu>
            { showServersMenu ? <DropdownMenu className="long" {...makeMenuOptions("Generate Server")}>
              <OAS3GeneratorMessage
                showModal={this.refs.generatorModal.show}
                hideModal={this.refs.generatorModal.hide}
                isShown={isOAS3()} />
              { this.state.servers
                  .map((serv, i) => <li key={i}><button type="button" onClick={this.downloadGeneratedFile.bind(null, "server", serv)}>{serv}</button></li>) }
            </DropdownMenu> : null }
            { showClientsMenu ? <DropdownMenu className="long" {...makeMenuOptions("Generate Client")}>
              <OAS3GeneratorMessage
                showModal={this.refs.generatorModal.show}
                hideModal={this.refs.generatorModal.hide}
                isShown={isOAS3()} />
              { this.state.clients
                  .map((cli, i) => <li key={i}><button type="button" onClick={this.downloadGeneratedFile.bind(null, "client", cli)}>{cli}</button></li>) }
            </DropdownMenu> : null }
          </div>
        </div>
        <Modal className="modal" ref="modal">
          <div className="container">
            <h2>Upload file</h2>
            <input type="file" ref="fileLoadInput"></input>
          </div>
          <div className="right">
            <button className="btn cancel" onClick={this.hideModal}>Cancel</button>
            <button className="btn" onClick={this.importFromFile}>Open file</button>
          </div>
        </Modal>
        <Modal className="modal" ref="generatorModal">
          <div className="modal-message">
            <p>
              Code generation for OAS3 is currently work in progress. The available languages is smaller than the for OAS/Swagger 2.0 and is constantly being updated.
            </p>
            <p>
              If you encounter issues with the existing languages, please file a ticket at&nbsp;
              <a href="https://github.com/swagger-api/swagger-codegen-generators" target={"_blank"}>swagger-codegen-generators</a>. Also, as this project highly depends on community contributions - please consider helping us migrate the templates for other languages. Details can be found at the same repository.
            </p>
            <p>
              Thanks for helping us improve this feature.
            </p>
          </div>
          <div className="right">
            <button className="btn" onClick={this.hideModal.bind(null, "generatorModal")}>
              Close
            </button>
          </div>
        </Modal>
      </div>

    )
  }
}

Topbar.propTypes = {
  specSelectors: PropTypes.object.isRequired,
  errSelectors: PropTypes.object.isRequired,
  specActions: PropTypes.object.isRequired,
  getComponent: PropTypes.func.isRequired,
  getConfigs: PropTypes.func.isRequired
}

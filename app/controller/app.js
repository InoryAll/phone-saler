const Model = require('../mocks/article/list');
const Controller = require('egg').Controller;
const DemandService = require('../service/DemandService');

class AppController extends Controller {
  async index() {
    await this.ctx.render('app/app.js', {
      url: this.ctx.url.replace(/\/app/, ''),
    });
  }

  async list() {
    const pageIndex = this.ctx.query.pageIndex;
    const pageSize = this.ctx.query.pageSize;
    this.ctx.body = Model.getPage(pageIndex, pageSize);
  }

  async detail() {
    const id = this.ctx.query.id;
    await DemandService.getAllDemandList(this.ctx, { id });
  }
}

module.exports = AppController;
<template>
  <div v-if="visible" class="phone-address-edit-list">
    <mt-popup
      class="phone-address-edit-list-pop-up"
      v-model="visible"
      position="right">
      <div class="phone-address-edit-list-pop-up-content">
        <div class="phone-address-edit-list-pop-up-content-header">
          <div class="header-content clearfix">
            <div class="header-left">
              <a @click="handleAddressEditHide"><i class="iconfont icon-left header-icon"></i></a>
            </div>
            管理收货地址
          </div>
        </div>
        <ul class="phone-address-edit-list-pop-up-content-list">
          <li class="list-item">
            <a href="" class="list-link clearfix">
              <div class="list-item-user clearfix">
                <div class="list-item-left">
                  <p class="list-item-left-name">王润方</p>
                </div>
                <div class="list-item-right">
                  <span class="list-item-right-phone">18885234915</span>
                </div>
              </div>
              <p class="list-item-address">云南省昆明市呈贡区 云南大学南苑综合楼</p>
              <div class="list-item-actions clearfix">
                <div class="list-item-actions-left">
                  <mt-radio
                    class="list-item-radio"
                    :options="[{
                      label: '默认地址',
                      value: 'default',
                    }]">
                  </mt-radio>
                </div>
                <div class="list-item-actions-right">
                  <a class="list-item-edit">
                    <i class="iconfont icon-edit-square list-item-edit-icon"></i>
                    编辑
                  </a>
                  <a class="list-item-delete">
                    <i class="iconfont icon-delete list-item-delete-icon"></i>
                    删除
                  </a>
                </div>
              </div>
            </a>
          </li>
          <li class="list-item">
            <a href="" class="list-link clearfix">
              <div class="list-item-user clearfix">
                <div class="list-item-left">
                  <p class="list-item-left-name">王润方</p>
                </div>
                <div class="list-item-right">
                  <span class="list-item-right-phone">18885234915</span>
                </div>
              </div>
              <p class="list-item-address">云南省昆明市呈贡区 云南大学南苑综合楼</p>
              <div class="list-item-actions clearfix">
                <div class="list-item-actions-left">
                  <mt-radio
                    class="list-item-radio"
                    :options="[{
                      label: '默认地址',
                      value: 'default',
                    }]">
                  </mt-radio>
                </div>
                <div class="list-item-actions-right">
                  <a class="list-item-edit">
                    <i class="iconfont icon-edit-square list-item-edit-icon"></i>
                    编辑
                  </a>
                  <a class="list-item-delete">
                    <i class="iconfont icon-delete list-item-delete-icon"></i>
                    删除
                  </a>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <div class="phone-address-edit-list-pop-up-content-actions">
          <a class="actions-btn" href="">添加新地址</a>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
  /**
   * 地址列表编辑组件
   */
  import { Popup } from 'mint-ui';

  export default {
    name: 'address-edit-list',
    components: {
      Popup
    },
    props: {
      addressEditVisible: Boolean,
      onEditVisibleChange: Function,
    },
    data() {
      return {
        visible: this.addressEditVisible,
      };
    },
    computed: {},
    watch: {
      visible: {
        handler(newValue, oldValue) {
          this.onEditVisibleChange(newValue);
        }
      },
      addressEditVisible: {
        handler(newValue, oldValue) {
          this.visible = newValue;
        }
      },
    },
    methods: {
      handleAddressEditHide() {
        this.visible = false;
      }
    },
  };
</script>
<style lang="less">
  .phone-address-edit-list{
    position: relative;
    height: 100%;
    overflow: scroll;
    background: #f4f4f4;
    .phone-address-edit-list-pop-up{
      width: 100%;
      height: 100%;
      background: #f4f4f4;
    }
    &-pop-up-content-header{
      position: fixed;
      width: 100%;
      height: 38px;
      top: 0;
      left: 0;
      transform: translateZ(9999px);
      background: #fff;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 2px;
      z-index: 9999;
    }
    .header-content{
      font-size: 16px;
      text-align: center;
      line-height: 36px;
      color: #000;
    }
    .header-icon{
      font-size: 18px;
      line-height: 36px;
    }
    .header-left{
      float: left;
      padding-left: 10px;
      a{
        text-decoration: none;
      }
      .header-icon{
        color: #333;
        font-size: 20px;
        line-height: 36px;
      }
    }
    .header-right{
      float: right;
      padding-right: 10px;
      &-link{
        color: #444;
        text-decoration: none;
      }
    }
    &-pop-up-content-list{
      padding-top: 37px;
      margin: 0;
      .list-item{
        background: #fff;
        padding-top: 10px;
        border-bottom: 1px solid #d9d9d9;
        margin-bottom: 10px;
        &-user{
          padding: 0 10px;
        }
        &-left{
          float: left;
          width: 70%;
          &-name{
            color: #0b1b27;
            margin: 0;
            font-size: 16px;
            padding: 6px 0;
          }
        }
        &-right{
          float: right;
          width: 30%;
          color: #0b1b27;
          margin: 0;
          font-size: 16px;
          padding: 6px 0;
        }
        &-address{
          padding: 0 10px 10px;
          margin: 0;
          color: #0b1b27;
          font-size: 13px;
          .tip{
            color: #ec5e2a;
          }
        }
        &-actions{
          padding: 4px 10px;
          border-top: 1px solid #d9d9d9;
          &-left{
            float: left;
            a{
              text-decoration: none;
            }
            .list-item-radio{
              display: inline-block;
            }
            .mint-cell{
              min-height: 30px;
            }
            .mint-radiolist-title{
              display: none;
            }
            .mint-cell-wrapper{
              padding: 0;
            }
            .mint-radiolist-label{
              padding: 0;
              margin-bottom: 0;
            }
            .mint-radio-label{
              font-size: 14px;
              color: #0b1b27;
              font-weight: normal;
              margin-left: 2px;
            }
            .mint-radio-core{
              width: 18px;
              height: 18px;
            }
            .mint-radio-core::after{
              top: 4px;
              left: 4px;
            }
            .mint-radio-input:checked + .mint-radio-core{
              background-color: #e96235;
              border-color: #e96235;
            }
          }
          &-right{
            float: right;
            .list-item-edit{
              line-height: 32px;
              color: #0b1b27;
              &-icon{
                color: #000;
                font-size: 18px;
                vertical-align: bottom;
              }
            }
            .list-item-delete{
              line-height: 32px;
              color: #0b1b27;
              &-icon{
                color: #000;
                font-size: 18px;
                vertical-align: bottom;
              }
            }
          }
        }
      }
      .list-link{
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
      }
    }
    &-pop-up-content-actions{
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 10px;
      background: #fff;
      .actions-btn{
        display: block;
        width: 100%;
        color: #fff;
        background: -webkit-linear-gradient(90deg, #f09436 0%, #ec5f2a 100%); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(90deg, #f09436 0%, #ec5f2a 100%); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(90deg, #f09436 0%, #ec5f2a 100%); /* Firefox 3.6 - 15 */
        background: linear-gradient(90deg, #f09436 0%, #ec5f2a 100%); /* 标准的语法 */
        padding: 8px 0;
        text-align: center;
        border-radius: 18px;
        text-decoration: none;
      }
    }
  }
</style>
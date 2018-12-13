<template>
  <div class="phone-order-list">
    <div class="phone-order-list-header">
      <div class="header-content clearfix">
        <div class="header-left">
          <i class="iconfont icon-left header-icon"></i>
        </div>
        <span class="header-content-text">我的订单</span>
      </div>
    </div>
    <div class="phone-order-list-tabs">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">待付款</mt-tab-item>
        <mt-tab-item id="3">待发货</mt-tab-item>
        <mt-tab-item id="4">待收货</mt-tab-item>
      </mt-navbar>
    </div>
    <div class="phone-order-list-contents">
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="phone-order-list-contents-area">
            <ul class="phone-order-list-contents-area-list">
              <li class="list-item">
                <a href="" class="list-link">
                  <div class="list-item-status">
                    <span class="status-tip">交易关闭</span>
                  </div>
                  <ul class="list-item-products-list">
                    <li class="list-element clearfix">
                      <div class="list-element-left">
                        <img class="list-element-left-img" src="../../../../web/asset/images/phone.png" alt="图片">
                      </div>
                      <div class="list-element-right clearfix">
                        <div class="list-element-name">
                          <p class="list-element-title">小计新款格子衬衫女学生款式宽松百搭中长款长袖防晒衣韩版潮</p>
                          <p class="list-element-setting">黄色：均码</p>
                          <p class="list-element-tips">
                            <span class="tip">七天替换</span>
                          </p>
                        </div>
                        <div class="list-element-price">
                          <span class="price">￥58.36</span>
                          <span class="count">x1</span>
                        </div>
                      </div>
                    </li>
                    <li class="list-element clearfix">
                      <div class="list-element-left">
                        <img class="list-element-left-img" src="../../../../web/asset/images/phone.png" alt="图片">
                      </div>
                      <div class="list-element-right clearfix">
                        <div class="list-element-name">
                          <p class="list-element-title">小计新款格子衬衫女学生款式宽松百搭中长款长袖防晒衣韩版潮</p>
                          <p class="list-element-setting">黄色：均码</p>
                          <p class="list-element-tips">
                            <span class="tip">七天替换</span>
                          </p>
                        </div>
                        <div class="list-element-price">
                          <span class="price">￥58.36</span>
                          <span class="count">x1</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="list-item-cal">
                    <div class="cal-price">共2件商品 合计：￥53.86</div>
                    <div class="cal-btn">
                      <a href="" class="cal-btn-delete">删除订单</a>
                    </div>
                  </div>
                </a>
              </li>
              <li class="list-item">
                <a href="" class="list-link">
                  <div class="list-item-status">
                    <span class="status-tip">交易关闭</span>
                  </div>
                  <ul class="list-item-products-list">
                    <li class="list-element clearfix">
                      <div class="list-element-left">
                        <img class="list-element-left-img" src="../../../../web/asset/images/phone.png" alt="图片">
                      </div>
                      <div class="list-element-right clearfix">
                        <div class="list-element-name">
                          <p class="list-element-title">小计新款格子衬衫女学生款式宽松百搭中长款长袖防晒衣韩版潮</p>
                          <p class="list-element-setting">黄色：均码</p>
                          <p class="list-element-tips">
                            <span class="tip">七天替换</span>
                          </p>
                        </div>
                        <div class="list-element-price">
                          <span class="price">￥58.36</span>
                          <span class="count">x1</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="list-item-cal">
                    <div class="cal-price">共2件商品 合计：￥53.86</div>
                    <div class="cal-btn">
                      <a href="" class="cal-btn-delete">删除订单</a>
                    </div>
                  </div>
                </a>
              </li>
              <li class="list-item">
                <a href="" class="list-link">
                  <div class="list-item-status">
                    <span class="status-tip">交易关闭</span>
                  </div>
                  <ul class="list-item-products-list">
                    <li class="list-element clearfix">
                      <div class="list-element-left">
                        <img class="list-element-left-img" src="../../../../web/asset/images/phone.png" alt="图片">
                      </div>
                      <div class="list-element-right clearfix">
                        <div class="list-element-name">
                          <p class="list-element-title">小计新款格子衬衫女学生款式宽松百搭中长款长袖防晒衣韩版潮</p>
                          <p class="list-element-setting">黄色：均码</p>
                          <p class="list-element-tips">
                            <span class="tip">七天替换</span>
                          </p>
                        </div>
                        <div class="list-element-price">
                          <span class="price">￥58.36</span>
                          <span class="count">x1</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="list-item-cal">
                    <div class="cal-price">共2件商品 合计：￥53.86</div>
                    <div class="cal-btn">
                      <a href="" class="cal-btn-delete">删除订单</a>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell title="测试" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell title="选项" />
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <mt-cell title="选项" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script type="text/babel">
  /**
   * 订单列表组件
   */
  import { Navbar, TabItem } from 'mint-ui';

  export default {
    name: 'order-list',
    components: {
      Navbar,
      TabItem
    },
    data() {
      return {
        selected: '1',
      };
    },
    computed: {},
    watch: {},
    methods: {},
  };
</script>
<style lang="less">
  .phone-order-list{
    height: 100%;
    overflow: scroll;
    background: #f4f4f4;
    &-header{
      position: fixed;
      width: 100%;
      height: 38px;
      top: 0;
      left: 0;
      transform: translateZ(9999px);
      background: #fff;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 2px;
      z-index: 99;
    }
    .header-content{
      font-size: 16px;
      text-align: center;
      line-height: 36px;
      &-text{
        margin-left: -30px;
      }
    }
    .header-icon{
      font-size: 18px;
      line-height: 36px;
    }
    .header-left{
      float: left;
      padding-left: 10px;
      .header-icon{
        color: #333;
        font-size: 20px;
        line-height: 36px;
      }
    }
    &-tabs{
      padding-top: 37px;
      a, a:hover, a:focus{
        text-decoration: none;
      }
      .mint-navbar .mint-tab-item{
        color: #3e4245;
        padding: 12px 0;
      }
      .mint-tab-item-label{
        font-size: 14px;
      }
      .mint-navbar .mint-tab-item.is-selected{
        border-bottom: 3px solid #ec5e2a;
        color: #ec5e2a;
        margin-bottom: -3px;
      }
    }
    &-contents{
      margin-top: 2px;
      &-area{
        background: #fff;
        &-list{
           margin: 0;
        }
        .list-item{
          border-bottom: 10px solid #f4f4f4;
          &-status{
            padding: 6px 10px;
            text-align: right;
            color: #ec612a;
          }
          &-product-list{
            margin: 0;
          }
          &-cal{
            margin-top: 10px;
            .cal-price{
              text-align: right;
              color: #3e4244;
              padding: 10px;
              border-top: 1px solid #e7e7e7;
              border-bottom: 1px solid #e7e7e7;
            }
            .cal-btn{
              padding: 10px;
              text-align: right;
              &-delete{
                color: #3e4244;
                border: 1px solid #cecece;
                padding: 4px 12px;
                border-radius: 15px;
                font-size: 14px;
              }
            }
          }
        }
        .list-element{
          padding: 0 10px 10px;
          background: #fafafa;
          border-bottom: 1px solid #e7e7e7;
          &-left{
            float: left;
            width: 80px;
            &-img{
              display: block;
              width: 80px;
              height: 80px;
            }
          }
          &-right{
            overflow: hidden;
            padding-left: 10px;
            .list-element-name{
              float: left;
              width: 78%;
              .list-element-title{
                color: #0b1b27;
                font-size: 12px;
                margin: 0;
              }
              .list-element-setting{
                margin: 0;
                color: #999;
                font-size: 12px;
                padding: 2px 0;
              }
              .list-element-tips{
                margin: 0;
                color: #cb3b32;
                font-size: 12px;
                .tip{
                  border: 1px solid #cb3b32;
                  border-radius: 4px;
                  padding: 0 4px;
                }
              }
            }
            .list-element-price{
              overflow: hidden;
              text-align: right;
              .price{
                color: #3e4244;
              }
              .count{
                color: #999;
              }
            }
          }
        }
        .list-element:last-child{
          border-bottom: none;
        }
      }
    }
  }
</style>
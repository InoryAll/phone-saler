<template>
  <div class="phone-order-pay">
    <div class="phone-order-pay-header">
      <div class="header-content clearfix">
        <div class="header-left">
          <i class="iconfont icon-left header-icon"></i>
        </div>
        订单详情
      </div>
    </div>
    <div class="phone-order-pay-status clearfix">
      <div class="phone-order-pay-status-left">
        <p class="status">等待买家付款</p>
        <p class="leftTime">剩23小时59分自动关闭</p>
      </div>
      <div class="phone-order-pay-status-right">
        <img class="phone-order-pay-status-right-img" src="../../../../web/asset/images/order.png" alt="图片">
      </div>
    </div>
    <div class="phone-order-pay-receive clearfix">
      <div class="phone-order-pay-receive-left">
        <i class="iconfont icon-location receive-left-icon"></i>
      </div>
      <div class="phone-order-pay-receive-right">
        <div class="base-info clearfix">
          <span class="name">收货人：王润方</span>
          <span class="phone">18885234915</span>
        </div>
        <p class="address">
          收货地址：云南省 昆明市 呈贡区 云南大学南苑综合楼
        </p>
      </div>
    </div>
    <div class="phone-order-pay-product">
      <ul class="phone-order-pay-product-list">
        <li class="list-item">
          <div class="product-info clearfix">
            <div class="product-info-left">
              <img class="product-info-left-img" src="../../../../web/asset/images/phone.png" alt="图片">
            </div>
            <div class="product-info-right clearfix">
              <div class="product-info-right-name">
                <p class="product-info-right-name-title">小计新款格子衬衫女学生款式宽松百搭中长款长袖防晒衣韩版潮</p>
                <p class="product-info-right-name-setting">黄色：均码</p>
                <p class="product-info-right-name-tip"><span class="tip">七天替换</span></p>
              </div>
              <div class="product-info-right-price">
                <span class="price">￥53.86</span>
                <span class="count">x1</span>
              </div>
            </div>
          </div>
          <div class="product-total clearfix">
            <span class="product-total-label">商品总价</span>
            <span class="product-total-value">￥53.86</span>
          </div>
        </li>
        <li class="list-item">
          <div class="product-info clearfix">
            <div class="product-info-left">
              <img class="product-info-left-img" src="../../../../web/asset/images/phone.png" alt="图片">
            </div>
            <div class="product-info-right clearfix">
              <div class="product-info-right-name">
                <p class="product-info-right-name-title">小计新款格子衬衫女学生款式宽松百搭中长款长袖防晒衣韩版潮</p>
                <p class="product-info-right-name-setting">黄色：均码</p>
                <p class="product-info-right-name-tip"><span class="tip">七天替换</span></p>
              </div>
              <div class="product-info-right-price">
                <span class="price">￥53.86</span>
                <span class="count">x1</span>
              </div>
            </div>
          </div>
          <div class="product-total clearfix">
            <span class="product-total-label">商品总价</span>
            <span class="product-total-value">￥53.86</span>
          </div>
        </li>
      </ul>
      <div class="phone-order-pay-product-cal">
        <div class="cal-total clearfix">
          <span class="cal-total-label">订单总价</span>
          <span class="cal-total-value">￥53.86</span>
        </div>
        <div class="cal-pay clearfix">
          <span class="cal-pay-label">需付款</span>
          <span class="cal-pay-value">￥53.86</span>
        </div>
      </div>
    </div>
    <div class="phone-order-pay-detail">
      <p class="phone-order-pay-detail-p">订单编号：222880513475017889</p>
      <p class="phone-order-pay-detail-p">创建时间：2018-09-20 10:47:30</p>
    </div>
  </div>
</template>
<script type="text/babel">
  /**
   * 订单支付页组件
   */

  export default {
    name: 'order-pay',
    components: {},
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {},
  };
</script>
<style lang="less">
  .phone-order-pay{
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
    &-status{
      padding: 57px 30px 20px;
      background: -webkit-linear-gradient(90deg, #f09436 0%, #ec5e2a 100%); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(90deg, #f09436 0%, #ec5e2a 100%); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(90deg, #f09436 0%, #ec5e2a 100%); /* Firefox 3.6 - 15 */
      background: linear-gradient(90deg, #f09436 0%, #ec5e2a 100%); /* 标准的语法 */
      &-left{
        float: left;
        color: #fff;
      }
      &-right{
        float: right;
        &-img{
          display: block;
          width: 80px;
          margin-right: 20px;
        }
      }
      .status{
        margin: 0;
        font-size: 17px;
      }
      .leftTime{
        margin: 0;
        font-size: 14px;
        padding-top: 4px;
      }
    }
    &-receive{
      background: #fff;
      padding: 10px;
      border-bottom: 10px solid #f4f4f4;
      display: flex;
      align-items: center;
      &-left{
        float: left;
        width: 40px;
        text-align: center;
        .receive-left-icon{
          font-size: 24px;
          color: #60646d;
        }
      }
      &-right{
        overflow: hidden;
        box-sizing: border-box;
        padding-left: 10px;
        .base-info{
          .name{
            color: #666;
            font-size: 14px;
          }
          .phone{
            color: #666;
            font-size: 14px;
            float: right;
          }
        }
        .address{
          margin: 0;
          color: #666;
          font-size: 14px;
        }
      }
    }
    &-product{
      padding: 10px 0;
      background: #fff;
      border-bottom: 10px solid #f4f4f4;
      &-list{
        margin: 0;
        .list-item{
          background: #fafafa;
          padding: 0 10px;
          border-bottom: 1px solid #e7e7e7;
          .product-info-left{
            float: left;
            width: 70px;
            &-img{
              display: block;
              width: 70px;
              height: 70px;
            }
          }
          .product-info-right{
            overflow: hidden;
            box-sizing: border-box;
            padding-left: 10px;
            &-name{
              float: left;
              width: 78%;
              &-title{
                margin: 0;
                color: #0b1b27;
                font-size: 12px;
              }
              &-setting{
                margin: 0;
                color: #999;
                font-size: 12px;
                padding: 2px 0;
              }
              &-tip{
                margin: 0;
                font-size: 12px;
                .tip{
                  color: #ec602c;
                  background: #fdf1ed;
                  padding: 0 6px;
                  border-radius: 4px;
                }
              }
            }
            &-price{
              overflow: hidden;
              text-align: right;
              .price{

              }
              .count{
                color: #999;
              }
            }
          }
          .product-total{
            background: #fff;
            color: #999;
            padding: 6px 0;
            font-size: 14px;
            &-label{
              float: left;
            }
            &-value{
              float: right;
            }
          }
        }
        .list-item + .list-item{
          margin-top: 10px;
        }
      }
      &-cal{
        color: #3e4245;
        padding: 0 10px;
        .cal-total{
          padding: 10px 0 10px;
          &-label{
            float: left;
          }
          &-value{
            float: right;
          }
        }
        .cal-pay{
          &-label{
            float: left;
          }
          &-value{
            float: right;
            color: #ec5e2a;
          }
        }
      }
    }
    &-detail{
      padding: 10px;
      background: #fff;
      &-p{
        margin: 0;
        color: #666;
        padding: 2px 0;
      }
    }
  }
</style>
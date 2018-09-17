<template>
  <div class="phone-order-detail">
    <div class="phone-order-detail-header">
      <div class="header-content clearfix">
        <div class="header-left">
          <i class="iconfont icon-left header-icon"></i>
        </div>
        确认订单
      </div>
    </div>
    <div class="phone-order-detail-address">
      <a class="detail-address-link clearfix" @click="handleAddressClick">
        <div class="detail-address-left">
          <i class="iconfont icon-location detail-address-left-icon"></i>
        </div>
        <div class="detail-address-center">
          <div class="detail-address-center-above clearfix">
            <p class="detail-address-center-above-name">收货人：王润方</p>
            <p class="detail-address-center-above-phone">18885234915</p>
          </div>
          <div class="detail-address-center-below">
            <p class="detail-address-center-below-location">收货地址：云南省昆明市呈贡区云南大学南苑综合楼</p>
          </div>
        </div>
        <div class="detail-address-right">
          <i class="iconfont icon-right detail-address-right-icon"></i>
        </div>
      </a>
    </div>
    <div class="phone-order-detail-products">
      <ul class="phone-order-detail-products-list">
        <li class="list-item">
          <a href="" class="list-link">
            <div class="list-item-prod clearfix">
              <div class="list-item-prod-left">
                <img src="../../../../web/asset/images/phone.png" alt="图片" class="list-item-prod-left-img">
              </div>
              <div class="list-item-prod-right">
                <p class="list-item-prod-right-name">分期免息【比官网少50元】Xiaomi/小米红米6pro手机红米6pro</p>
                <p class="list-item-prod-right-setting">颜色分类：曜石黑 内存大小：64g</p>
                <p class="list-item-prod-right-service"><span class="tip">7天退换</span></p>
                <p class="list-item-prod-right-price clearfix">
                  <span class="price">￥<strong>49.0</strong></span>
                  <span class="count">x1</span>
                </p>
              </div>
            </div>
          </a>
          <div class="list-item-sending">
            <mt-cell title="配送方式" value="快递免邮"></mt-cell>
          </div>
          <div class="list-item-remark">
            <mt-field label="买家留言：" placeholder="选填：填写内容请注意规范"></mt-field>
          </div>
          <div class="list-item-total">
            <span class="list-item-total-count">共1件商品</span>
            <span class="list-item-total-cal">小计：<strong class="price">￥49.0</strong></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="phone-order-detail-btns">
      <span class="phone-order-detail-btns-price">
        <span class="title">合计金额：</span>
        <strong class="price">￥102.86</strong>
      </span>
      <span class="phone-order-detail-btns-price-btn">
        <a class="submit-btn" href="">提交订单</a>
      </span>
    </div>
    <Address :addressVisible="addressVisible" :onVisibleChange="onVisibleChange"></Address>
  </div>
</template>
<script type="text/babel">
  /**
   * 订单详情页组件
   */
  import { Cell } from 'mint-ui';
  import Address from './address/address';

  export default {
    name: 'order-detail',
    components: {
      Cell,
      Address
    },
    data() {
      return {
        addressVisible: false,
      };
    },
    computed: {},
    watch: {},
    methods: {
      handleAddressClick() {
        this.addressVisible = true;
      },
      onVisibleChange(val) {
        this.addressVisible = val;
      },
    },
  };
</script>
<style lang="less">
  .phone-order-detail{
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
    &-address{
      padding: 47px 10px 20px;
      background: url("../../../../web/asset/images/border.png") #fff left bottom repeat-x;
      background-size: auto 10px;
      border-bottom: 10px solid #f4f4f4;
      .detail-address-link{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
      }
      .detail-address-left{
        float: left;
        padding-right: 6px;
        &-icon{
          color: #3e4245;
          font-size: 20px;
        }
      }
      .detail-address-center{
        float: left;
        font-size: 12px;
        color: #333;
        padding-right: 10px;
        &-above{
          &-name{
            float: left;
            margin: 0;
            line-height: 24px;
          }
          &-phone{
            float: right;
            margin: 0 -10px 0 0;
            line-height: 24px;
          }
        }
        &-below{
          &-location{
            margin: 0;
            line-height: 24px;
          }
        }
      }
      .detail-address-right{
        float: right;
        padding-left: 6px;
        &-icon{
          color: #d0cfd0;
          font-size: 20px;
        }
      }
    }
    &-products{
      &-list{
        margin: 0;
      }
      .list-link{
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
      }
      .list-item{
        padding: 10px 0;
        border-bottom: 10px solid #f4f4f4;
        background: #fff;
        &-prod{
          background: #fafafa;
          padding: 10px;
          &-left{
            float: left;
            &-img{
              display: block;
              width: 80px;
              height: 80px;
            }
          }
          &-right{
            overflow: hidden;
            padding-left: 10px;
            &-name{
              margin: 0;
              font-size: 13px;
              color: #3e4245;
              padding-bottom: 4px;
            }
            &-setting{
              margin: 0;
              color: #999;
              font-size: 12px;
            }
            &-service{
              margin: 0;
              .tip{
                color: #cb3b32;
                border: 1px solid #cb3b32;
                font-size: 12px;
                padding: 0 2px;
                border-radius: 2px;
              }
            }
            &-price{
              font-size: 14px;
              margin: 0;
              .price{
                color: #ec5e2a;
              }
              .count{
                color: #3e4245;
                float: right;
              }
            }
          }
        }
        &-sending,&-remark{
          a{
            text-decoration: none;
          }
        }
        &-total{
          text-align: right;
          padding: 10px 10px 0;
          &-count{
            color: #333;
            padding: 0 10px;
            font-size: 14px;
          }
          &-cal{
            font-size: 14px;
            color: #333;
            .price{
              color: #ec5e2a;
              font-size: 16px;
            }
          }
        }
      }
    }
    &-btns{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #fff;
      padding: 12px 0;
      text-align: right;
      border-top: 1px solid #eee;
      font-size: 14px;
      &-price{
        padding: 0 6px;
        .title{
          color: #333;
        }
        .price{
          color: #ec5e2a;
        }
      }
      &-price-btn{
        .submit-btn{
          color: #fff;
          background: -webkit-linear-gradient(90deg, #f09436 0%, #ec5e2a 100%); /* Safari 5.1 - 6.0 */
          background: -o-linear-gradient(90deg, #f09436 0%, #ec5e2a 100%); /* Opera 11.1 - 12.0 */
          background: -moz-linear-gradient(90deg, #f09436 0%, #ec5e2a 100%); /* Firefox 3.6 - 15 */
          background: linear-gradient(90deg, #f09436 0%, #ec5e2a 100%); /* 标准的语法 */
          text-decoration: none;
          padding: 12px 20px;
        }
      }
    }
  }
</style>
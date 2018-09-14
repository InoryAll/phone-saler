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
      <a href="" class="detail-address-link clearfix">
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
  </div>
</template>
<script type="text/babel">
  /**
   * 订单详情页组件
   */

  export default {
    name: 'order-detail',
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
  .phone-order-detail{
    height: 100%;
    overflow: scroll;
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
      z-index: 9999;
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
      background: url("../../../../web/asset/images/border.png") left bottom repeat-x;
      background-size: auto 10px;
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
  }
</style>
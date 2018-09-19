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
    <div class="phone-order-pay-status">
      <p class="status">等待买家付款</p>
      <p class="leftTime">剩23小时59分自动关闭</p>
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

    }
  }
</style>
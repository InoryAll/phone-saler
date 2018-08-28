<template>
  <div class="phone-cart">
    <!--购物车头部/S-->
    <div class="phone-cart-header">
      <div class="header-content clearfix">
        购物车
        <div class="header-right">
          <i class="iconfont icon-mail header-icon"></i>
        </div>
      </div>
    </div>
    <!--购物车头部/E-->
    <!--购物车体/S-->
    <CartContent></CartContent>
    <!--购物车体/E-->
  </div>
</template>
<script type="text/babel">
  /**
   * 购物车组件
   */
  import CartContent from './cartContent/cartContent';

  export default {
    name: 'cart-page',
    components: {
      CartContent
    },
    data() {
      return {};
    },
    computed: {},
    watch: {},
    method: {},
  };
</script>
<style lang="less">
  .phone-cart{
    height: 100%;
    overflow: scroll;
    &-header{
      background: #fff;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 2px;
    }
    .header-content{
      font-size: 16px;
      text-align: center;
      line-height: 36px;
    }
    .header-right{
      float: right;
      margin-right: 6px;
    }
    .header-icon{
      font-size: 18px;
      line-height: 36px;
    }
  }
</style>
<template>
  <!--网格展示/S-->
  <div class="phone-product-grid">
    <div class="grid-item">
      <a href="" class="grid-item-icon"></a>
      <span class="grid-item-span">手机</span>
    </div>
    <div class="grid-item">
      <a href="" class="grid-item-icon"></a>
      <span class="grid-item-span">我的订单</span>
    </div>
    <div class="grid-item">
      <a href="" class="grid-item-icon"></a>
      <span class="grid-item-span">我的收藏</span>
    </div>
    <div class="grid-item">
      <a href="" class="grid-item-icon"></a>
      <span class="grid-item-span">购物车</span>
    </div>
  </div>
  <!--网格展示/E-->
</template>
<script type="text/babel">
  /**
   * 首页网格展示
   */
  export default {
    name: 'product-grid',
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
  .phone-product-grid{
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    padding: 10px 0;
    border-bottom: 10px solid #f5f5f5;
    .grid-item{
      text-align: center;
      flex: 1;
      &-icon{
        display: inline-block;
        width: 40px;
        height: 40px;
        background-size: 40px 40px;
      }
      &-span{
        display: block;
        font-size: 14px;
        font-weight: 500;
      }
    }
    .grid-item:nth-child(1) .grid-item-icon{
      background-image: url("../../../../../web/asset/images/grid/1.png");
    }
    .grid-item:nth-child(2) .grid-item-icon {
      background-image: url("../../../../../web/asset/images/grid/2.png");
    }
    .grid-item:nth-child(3) .grid-item-icon {
      background-image: url("../../../../../web/asset/images/grid/3.png");
    }
    .grid-item:nth-child(4) .grid-item-icon {
      background-image: url("../../../../../web/asset/images/grid/4.png");
    }
  }
</style>
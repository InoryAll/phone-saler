<template>
  <div class="phone-main">
    <div class="phone-main-header">
      <div class="phone-main-header-left">
        <i class="iconfont icon-location phone-main-icon"></i>
        <span class="phone-main-span">杨庙专营店</span>
      </div>
      <div class="phone-main-header-right">
        <a href=""><i class="iconfont icon-search phone-main-icon"></i></a>
        <a href=""><i class="iconfont icon-mail phone-main-icon"></i></a>
      </div>
    </div>
    <mt-swipe :auto="100000">
      <mt-swipe-item>
        <img class="phone-main-img" src="https://m.xyz.cn/p/picture/pic1494503.jpg" alt="图片">
      </mt-swipe-item>
      <mt-swipe-item>
        <img class="phone-main-img" src="https://m.xyz.cn/p/picture/pic1585940.jpg" alt="图片">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script type="text/babel">
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'mint-ui';

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  export default {
    name: 'main-page',
    components: {},
    data() {
      return {};
    },
    computed: {},
    watch: {},
    method: {},
  };
</script>
<style lang="less">
  .phone-main {
    height: 160px;
    &-header{
      position: relative;
      top: 0;
      z-index: 999;
      &-left{
        position: absolute;
        top: 4px;
        left: 6px;
      }
      &-right{
        position: absolute;
        top: 4px;
        right: 6px;
      }
    }
    &-img{
      width: 100%;
      height: 100%;
    }
    &-icon{
      color: #fff;
      font-size: 22px;
      line-height: 24px;
      font-weight: 500;
    }
    .phone-main-icon:last-child{
      margin-left: 6px;
    }
    &-span{
      color: #fff;
      line-height: 24px;
      vertical-align: text-bottom;
    }
  }
</style>
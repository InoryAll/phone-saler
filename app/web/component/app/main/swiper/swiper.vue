<template>
  <div class="phone-main-swiper">
    <mt-swipe :auto="100000" class="phone-main-carousel">
      <mt-swipe-item>
        <img class="phone-main-img" src="https://m.xyz.cn/p/picture/pic1585940.jpg" alt="图片">
      </mt-swipe-item>
      <mt-swipe-item>
        <img class="phone-main-img" src="https://m.xyz.cn/p/picture/pic1494503.jpg" alt="图片">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script type="text/babel">
  /**
   * 走马灯
   */
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'mint-ui';

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  export default {
    name: '',
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
  .phone-main-swiper{
    .phone-main-carousel{
      height: 120px;
    }
  }
</style>
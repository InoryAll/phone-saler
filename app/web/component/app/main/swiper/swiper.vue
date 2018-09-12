<template>
  <div class="phone-main-swiper">
    <mt-swipe :auto="100000" class="phone-main-carousel">
      <mt-swipe-item>
        <img class="phone-main-img" src="../../../../../web/asset/images/phone.png" alt="图片">
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
  import { Swipe, SwipeItem } from 'mint-ui';

  export default {
    name: '',
    components: {
      Swipe,
      SwipeItem,
    },
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
    .phone-main-img{
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 160px;
    }
  }
</style>
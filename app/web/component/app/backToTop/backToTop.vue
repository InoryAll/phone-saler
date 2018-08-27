<template>
  <div v-if="isScroll" class="phone-backToTop">
    <a href="javascript:;" class="back-to-top-btn" @click="handleBackToTop">
      ↑
    </a>
  </div>
</template>
<script type="text/babel">
  /**
   * 返回顶部组件
   */
  import $ from 'jquery';

  export default {
    name: 'back-to-top',
    components: {},
    props: {
      isScroll: {
        type: Boolean,
      },
    },
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {
      handleBackToTop() {
        $('.mint-tab-container-item').animate({ scrollTop: 0 }, 300);
      },
    },
  };
</script>
<style lang="less">
  .phone-backToTop{
    position: fixed;
    width: 50px;
    height: 50px;
    z-index: 9999;
    bottom: 80px;
    right: 10px;
    .back-to-top-btn{
      display: block;
      color: #999;
      width: 50px;
      height: 50px;
      box-sizing: border-box;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      border-radius: 50%;
      border: 1px solid #d9d9d9;
      background: rgba(255,255,255,.8);
      box-shadow: 0 3px 3px rgba(0,0,0,.15);
    }
  }
</style>
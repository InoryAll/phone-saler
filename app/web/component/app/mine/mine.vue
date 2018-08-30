<template>
  <div class="phone-mine">
    <!--我的头部/S-->
    <div class="phone-mine-header clearfix">
      <div class="header-right">
        <i class="iconfont icon-mail header-icon"></i>
      </div>
    </div>
    <!--我的头部/E-->
    <!--我的内容/S-->
    <MineContent></MineContent>
    <!--我的内容/E-->
  </div>
</template>
<script type="text/babel">
  /**
   * 我的组件
   */
  import MineContent from './mineContent/mineContent';

  export default {
    name: 'mine-page',
    components: {
      MineContent
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
  .phone-mine{
    height: 100%;
    overflow: scroll;
    &-header{
      background: #fff;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 2px;
    }
    .header-right{
      float: right;
      margin-right: 6px;
      line-height: 36px;
    }
    .header-icon{
      font-size: 18px;
      line-height: 36px;
    }
  }
</style>
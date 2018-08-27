<template>
  <div class="phone-search clearfix">
    <div class="phone-search-content" :class="{ moreWidth: !hasCart }">
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="请输入关键词" class="search-input">
      </div>
    </div>
    <div class="phone-search-link">
      <a v-if="hasCart" class="search-link" href=""><i class="iconfont icon-shopping search-icon"></i></a>
      <a class="search-link" href=""><i class="iconfont icon-mail search-icon"></i></a>
    </div>
  </div>
</template>
<script type="text/babel">
  /**
   * 搜索头部组件
   */

  export default {
    name: 'search-header',
    components: {},
    props: {
      hasCart: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        value: '',
      };
    },
    computed: {},
    watch: {},
    methods: {},
  };
</script>
<style lang="less">
  .phone-search{
    width: 100%;
    height: 46px;
    position: fixed;
    top: 0;
    z-index: 999;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    .search{
      background: #eaeceb;
      border: 0;
      border-radius: 6px;
      padding: 4px 0;
      .icon-search{
        font-size: 18px;
        line-height: 27px;
        padding-left: 6px;
        color: #b4b4b4;
      }
      &-input{
        background: #eaeceb;
        border: none;
        outline: none;
        color: #807f80;
      }
    }
    &-content{
      width: 80%;
      padding: 4px 10px;
      float: left;
      .search-detail{
        height: 100%;
      }
    }
    &-link{
      display: flex;
      overflow: hidden;
      .search-link{
        flex: 1;
        display: inline-block;
        text-align: center;
      }
      .search-icon{
        font-size: 24px;
        color: #333;
        line-height: 46px;
      }
    }
    .moreWidth{
      width: 90%;
    }
  }
</style>
<template>
  <div class="phone-search clearfix">
    <div class="phone-search-content" :class="{ moreWidth: !hasCart }">
      <mt-search
        class="search-detail"
        v-model="value"
        placeholder="输入关键字"
      >
      </mt-search>
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
  import Vue from 'vue';
  import { Search } from 'mint-ui';

  Vue.component(Search.name, Search);

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
    background: #fff;
    &-content{
      width: 80%;
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
    .mint-searchbar{
      background: #eaebeb;
      padding: 0;
      margin: 8px 10px;
      border: 1px solid #eaebeb;
      border-radius: 6px;
    }
    .mint-searchbar-inner,.mint-searchbar-core{
      background: #eaebeb;
    }
    .mint-searchbar-core{
      font-size: 12px;
    }
    .mint-searchbar-cancel{
      color: #808080;
      margin-right: 10px;
      font-size: 12px;
    }
    .moreWidth{
      width: 90%;
    }
  }
</style>
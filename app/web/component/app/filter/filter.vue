<template>
  <div class="phone-filter">
    <!--搜索头部/S-->
    <SearchHeader :has-cart="false"></SearchHeader>
    <!--搜索头部/E-->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        11111111111
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        222222222222
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        333333333
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script type="text/babel">
  /**
   * 分类组件
   */
  import Vue from 'vue';
  import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
  import SearchHeader from '../searchHeader/searchHeader';

  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);

  export default {
    name: 'filter-page',
    components: {
      SearchHeader
    },
    data() {
      return {
        selected: '1',
      };
    },
    computed: {},
    watch: {},
    methods: {},
  };
</script>
<style lang="less">

</style>
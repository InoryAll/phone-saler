<template>
  <div class="item-list-page">
    <!--产品列表页头部/S-->
    <SearchHeader :hasBack="true" :hasCart="true"></SearchHeader>
    <!--产品列表页头部/E-->
    <!--产品列表页筛选器/S-->
    <FilterUtil></FilterUtil>
    <!--产品列表页筛选器/E-->
    <!--产品列表页/S-->
    <ItemUnit></ItemUnit>
    <!--产品列表页/E-->
  </div>
</template>
<script type="text/babel">
  /**
   * 商品列表组件
   */
  import SearchHeader from '../searchHeader/searchHeader';
  import FilterUtil from './filterUtil/filterUtil';
  import ItemUnit from './itemUnit/itemUnit';

  export default {
    name: 'item-list',
    components: {
      SearchHeader,
      FilterUtil,
      ItemUnit
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
  .item-list-page{
    height: 100%;
    overflow-y: scroll;
  }
</style>
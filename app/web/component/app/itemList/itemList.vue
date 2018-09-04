<template>
  <div class="item-list-page">
    <div class="item-list-page-header">
      <SearchHeader :hasBack="true" :hasCart="true"></SearchHeader>
    </div>
  </div>
</template>
<script type="text/babel">
  /**
   * 商品列表组件
   */
  import SearchHeader from '../searchHeader/searchHeader';

  export default {
    name: 'item-list',
    components: {
      SearchHeader
    },
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {},
  };
</script>
<style lang="less"></style>
<template>
  <div class="item-list-page-filter">
    <ul class="list-page-filter-list clearfix">
      <li class="list-item">
        <a @click="handleFilterClick(SORT_CONFIG.COMPREHENSIVE_SORT)" class="list-link">综合排序</a>
      </li>
      <li class="list-item">
        <a @click="handleFilterClick(SORT_CONFIG.NEWIEST)" class="list-link">最新</a>
      </li>
      <li class="list-item">
        <a @click="handleFilterClick(SORT_CONFIG.COLLECTION)" class="list-link">收藏</a>
      </li>
      <li class="list-item">
        <a @click="handleFilterClick(SORT_CONFIG.PRICE)" class="list-link">
          价格<i class="iconfont icon-down list-icon-price"></i>
        </a>
      </li>
      <li class="list-item">
        <a class="list-link">
          筛选<i class="iconfont icon-filter list-icon-filter"></i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">
  /**
   * 商品列表过滤器组件
   */
  import SORT_CONFIG from './sortConfig';

  export default {
    name: 'filter-util',
    components: {},
    data() {
      return {
        sortField: '',
        // 默认正序排列
        sortType: 'ASC',
        SORT_CONFIG,
      };
    },
    computed: {},
    watch: {},
    methods: {
      // 处理排序事件
      handleFilterClick(type) {
        const FILTER_TYPE = type;
        switch (FILTER_TYPE) {
          case SORT_CONFIG.COMPREHENSIVE_SORT:
            this.sortField = SORT_CONFIG.COMPREHENSIVE_SORT;
            break;
          case SORT_CONFIG.NEWIEST:
            this.sortField = SORT_CONFIG.NEWIEST;
            break;
          case SORT_CONFIG.COLLECTION:
            this.sortField = SORT_CONFIG.COLLECTION;
            break;
          case SORT_CONFIG.PRICE:
            this.sortField = SORT_CONFIG.PRICE;
            break;
          default:
            break;
        }
      }
    },
  };
</script>
<style lang="less">
  .item-list-page-filter{
    padding-top: 46px;
    border-bottom: 1px solid #e5e5e5;
    .list-page-filter-list{
      margin: 0;
      padding: 0;
      .list-item{
        box-sizing: border-box;
        width: 20%;
        float: left;
        margin: 8px 0;
        text-align: center;
      }
      .list-item:last-child{
        border-left: 1px solid #e5e5e5
      }
      .list-link{
        font-size: 15px;
        color: #333;
      }
      .list-icon-price{
        font-size: 12px;
        padding-left: 4px;
        color: #666;
      }
      .list-icon-filter{
        font-size: 14px;
        padding-left: 4px;
        color: #666;
      }
    }
  }
</style>
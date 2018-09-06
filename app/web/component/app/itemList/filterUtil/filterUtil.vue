<template>
  <div class="item-list-page-filter">
    <ul class="list-page-filter-list clearfix">
      <li class="list-item">
        <a
          @click="handleFilterClick(SORT_CONFIG.COMPREHENSIVE_SORT)"
          class="list-link"
          :class="{ active: sortField === SORT_CONFIG.COMPREHENSIVE_SORT }"
        >
          综合排序
        </a>
      </li>
      <li class="list-item">
        <a
          @click="handleFilterClick(SORT_CONFIG.NEWIEST)"
          class="list-link"
          :class="{ active: sortField === SORT_CONFIG.NEWIEST }"
        >
          最新
        </a>
      </li>
      <li class="list-item">
        <a
          @click="handleFilterClick(SORT_CONFIG.COLLECTION)"
          class="list-link"
          :class="{ active: sortField === SORT_CONFIG.COLLECTION }"
        >
          收藏
        </a>
      </li>
      <li class="list-item">
        <a
          @click="handleFilterClick(SORT_CONFIG.PRICE)"
          class="list-link list-link-price"
          :class="{
          active: sortField === SORT_CONFIG.PRICE,
          }"
        >
          价格
          <i
            class="iconfont icon-down list-icon-price"
            :class="{
              up: sortField === SORT_CONFIG.PRICE && sortType === 'ASC',
              down: sortField === SORT_CONFIG.PRICE && sortType === 'DESC',
              reset: sortType !== '' && sortField !== SORT_CONFIG.PRICE,
            }"
          ></i>
        </a>
      </li>
      <li class="list-item">
        <a
          class="list-link"
          @click="handleFilterClick(SORT_CONFIG.DETAIL)"
          :class="{
          active: sortField === SORT_CONFIG.DETAIL,
          }"
        >
          筛选<i class="iconfont icon-filter list-icon-filter"></i>
        </a>
      </li>
    </ul>
    <FilterDataPopUp
      :filterVisible="filterVisible"
      :changePopUpVisible="changePopUpVisible"
    ></FilterDataPopUp>
  </div>
</template>
<script type="text/babel">
  /**
   * 商品列表过滤器组件
   */
  import SORT_CONFIG from './sortConfig';
  import FilterDataPopUp from './filterDetailPopUp/filterDetailPopUp';

  export default {
    name: 'filter-util',
    components: {
      FilterDataPopUp,
    },
    data() {
      return {
        sortField: '',
        // 默认正序排列
        sortType: '',
        SORT_CONFIG,
        filterVisible: false,
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
            if (this.sortType === 'ASC') {
              this.sortType = 'DESC';
            } else {
              this.sortType = 'ASC';
            }
            break;
          case SORT_CONFIG.DETAIL:
            this.sortField = SORT_CONFIG.DETAIL;
            this.filterVisible = true;
            break;
          default:
            break;
        }
      },
      changePopUpVisible(val) {
        this.filterVisible = val;
      }
    },
  };
</script>
<style lang="less">
  @keyframes rotateToUp {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes rotateToDown {
    0% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  a, a:focus, a:active{
    text-decoration: none;
  }
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
      .list-link-price{
        position: relative;
        padding-right: 16px;
      }
      .list-link.active{
        color: #d76b68;
        text-decoration: none;
        .list-icon-filter{
          color: #d76b68;
        }
      }
      .up{
        color: #d76b68 !important;
        animation: rotateToUp 0.3s linear 0s 1 normal;
        animation-fill-mode: both;
      }
      .down{
        color: #d76b68 !important;
        animation: rotateToDown 0.3s linear 0s 1 normal;
        animation-fill-mode: both;
      }
      .reset{
        animation: rotateToDown 0.3s linear 0s 1 normal;
        animation-fill-mode: both;
      }
      .list-icon-price{
        position: absolute;
        font-size: 12px;
        margin-left: 4px;
        color: #666;
        top: 3px;
      }
      .list-icon-filter{
        font-size: 14px;
        padding-left: 4px;
        color: #666;
      }
    }
  }
</style>
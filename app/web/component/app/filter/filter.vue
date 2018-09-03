<template>
  <div class="phone-filter">
    <!--搜索头部/S-->
    <SearchHeader :hasCart="false" :hasBack="false"></SearchHeader>
    <!--搜索头部/E-->
    <div class="phone-filter-tab-card clearfix">
      <mt-navbar v-model="selected" class="phone-filter-slider">
        <mt-tab-item id="1">推荐</mt-tab-item>
        <mt-tab-item id="2">角色</mt-tab-item>
        <mt-tab-item id="3">召唤兽</mt-tab-item>
        <mt-tab-item id="4">武器</mt-tab-item>
        <mt-tab-item id="5">防具</mt-tab-item>
        <mt-tab-item id="6">灵饰</mt-tab-item>
        <mt-tab-item id="7">召唤兽装备</mt-tab-item>
        <mt-tab-item id="8">其他</mt-tab-item>
        <mt-tab-item id="9">公示期</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected" class="phone-filter-tabs">
        <mt-tab-container-item id="1">
          <FilterItem
            title="热门推荐"
            :filterArray="[{
              link: '',
              url: 'http://localhost:7001/public/img/grid-1.png',
              detail: '大唐官府',
            },{
              link: '',
              url: 'http://localhost:7001/public/img/grid-2.png',
              detail: '女儿村',
            },{
              link: '',
              url: 'http://localhost:7001/public/img/grid-3.png',
              detail: '龙宫',
            },{
              link: '',
              url: 'http://localhost:7001/public/img/grid-4.png',
              detail: '无底洞',
            }]"
          >
          </FilterItem>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          222222222222
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          333333333
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script type="text/babel">
  /**
   * 分类组件
   */
  import Vue from 'vue';
  import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
  import SearchHeader from '../searchHeader/searchHeader';
  import FilterItem from './filterItem/filterItem';

  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);

  export default {
    name: 'filter-page',
    components: {
      SearchHeader,
      FilterItem
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
  .phone-filter{
    height: 100%;
    padding-top: 46px;
    &-tab-card{
      height: 100%;
      border-bottom: 1px solid #e5e5e5;
      background: #fff;
      overflow: hidden;
    }
    &-slider{
      float: left;
      flex-direction: column;
      width: 90px;
      border-right: 1px solid #e5e5e5;
      padding-bottom: 9999px;
      margin-bottom: -9999px;
    }
    &-tabs{
      height: 100%;
    }
    .mint-tab-item{
      margin: 15px 0;
      padding: 2px 0;
      font-size: 15px;
    }
    .mint-tab-item.is-selected{
      border-left: 3px solid #d76c68;
      color: #d76c68;
      border-bottom: none;
      margin-bottom: 15px;
      .mint-tab-item-label{
        color: #d76c68;
      }
    }
    .mint-tab-item-label{
      font-size: 16px;
      color: #333;
    }
  }
</style>
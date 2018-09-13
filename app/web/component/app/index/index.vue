<template>
  <div class="index">
    <!--tabContainer/S-->
    <mt-tab-container
      v-model="selected"
      :swipeable="false"
    >
      <mt-tab-container-item id="首页">
        <MainPage></MainPage>
      </mt-tab-container-item>
      <mt-tab-container-item id="分类">
        <FilterPage></FilterPage>
      </mt-tab-container-item>
      <mt-tab-container-item id="购物车">
        <CartPage v-if="lazyLoad"></CartPage>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <MinePage></MinePage>
      </mt-tab-container-item>
    </mt-tab-container>
    <!--tabContainer/E-->
    <!--baseFooter/S-->
    <BaseFooter></BaseFooter>
    <!--baseFooter/E-->
  </div>
</template>
<script type="text/babel">
  /**
   * 与底部tabbar所对应的联动card组件
   */
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  import _ from 'lodash';
  import { TabContainer, TabContainerItem, CellSwipe } from 'mint-ui';
  import * as Types from '../../../store/app/mutation-type';
  import MainPage from '../main/main';
  import FilterPage from '../filter/filter';
  import CartPage from '../cart/cart';
  import MinePage from '../mine/mine';
  import BaseFooter from '../footer/footer';

  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);

  // 需要进行懒加载的键值
  const LAZY_LOAD_KEY = ['购物车'];

  export default {
    name: 'index',
    components: {
      CellSwipe,
      MainPage,
      FilterPage,
      CartPage,
      MinePage,
      BaseFooter
    },
    props: {},
    data() {
      return {
        selected: '首页',
        lazyLoad: false,
      };
    },
    computed: {
      ...mapGetters(['tabKey']),
    },
    preFetch({ state, dispatch, commit }) {
      return Promise.all([
        dispatch(Types.TAB_BAR_CHANGE, { tabKey: this.selected })
      ]);
    },
    watch: {
      selected: {
        handler(newValue, oldValue) {
          if (LAZY_LOAD_KEY.indexOf(newValue) > -1) {
            // 懒加载，解决无法滑动删除问题（cell swiper问题）
            const timer = setTimeout(() => {
              this.lazyLoad = true;
              clearTimeout(timer);
            }, 0);
          }
          // 监听this.selected，同步改变vuex中的tabKey的值
          if (!_.isEqual(newValue, oldValue)) {
            return Promise.all([
              this.$store.dispatch(Types.TAB_BAR_CHANGE, { tabKey: newValue })
            ]);
          }
        },
      },
      tabKey: {
        handler(newValue, oldValue) {
          if (LAZY_LOAD_KEY.indexOf(newValue) > -1) {
            // 懒加载，解决无法滑动删除问题（cell swiper问题）
            const timer = setTimeout(() => {
              this.lazyLoad = true;
              clearTimeout(timer);
            }, 0);
          }
          // 当tabKey状态变化时，如果newValue！==this.selected，则不是组件本身的变化所引起的，需要更新this.selected
          if (!_.isEqual(newValue, this.selected)) {
            this.selected = newValue;
          }
        }
      },
    },
    methods: {},
  };
</script>
<style lang="less">
  .index{
    height: 100%;
    padding-bottom: 55px;
    background: #f5f5f5;
    .mint-tab-container,.mint-tab-container-wrap,.mint-tab-container-item{
      height: 100%;
      overflow: scroll;
    }
  }
</style>
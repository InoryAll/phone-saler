<template>
  <div class="index">
    <mt-tab-container
      v-model="selected"
      :swipeable="false"
    >
      <mt-tab-container-item id="首页">
        首页
      </mt-tab-container-item>
      <mt-tab-container-item id="分类">
        分类
      </mt-tab-container-item>
      <mt-tab-container-item id="购物车">
        购物车
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        我的
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script type="text/babel">
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  import _ from 'lodash';
  import { TabContainer, TabContainerItem } from 'mint-ui';
  import * as Types from '../../../store/app/mutation-type';

  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);

  export default {
    name: 'index',
    components: {},
    props: {},
    data() {
      return {
        selected: '首页',
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
    min-height: 100%;
  }
</style>
<template>
  <div class="footer-content">
    <!--tabbar/S-->
    <mt-tabbar
      v-model="selected"
      :fixed="true"
      class="footer-tabbar"
    >
      <mt-tab-item class="tabbar-item" id="首页">
        <i slot="icon" class="iconfont icon-home tabbar-item-icon"></i>
        <span class="tabbar-item-span">首页</span>
      </mt-tab-item>
      <mt-tab-item class="tabbar-item" id="分类">
        <i slot="icon" class="iconfont icon-appstore tabbar-item-icon"></i>
        <span class="tabbar-item-span">分类</span>
      </mt-tab-item>
      <mt-tab-item class="tabbar-item" id="购物车">
        <i slot="icon" class="iconfont icon-shopping tabbar-item-icon"></i>
        <span class="tabbar-item-span">购物车</span>
        <mt-badge class="tabbar-badge" size="small" type="error">2</mt-badge>
      </mt-tab-item>
      <mt-tab-item class="tabbar-item" id="我的">
        <i slot="icon" class="iconfont icon-user tabbar-item-icon"></i>
        <span class="tabbar-item-span">我的</span>
      </mt-tab-item>
    </mt-tabbar>
    <!--tabbar/E-->
  </div>
</template>
<script type="text/babel">
  /**
   * 底部共有组件footer
   * Created by tianrenjie on 2018/8/22
   */
  import _ from 'lodash';
  import { mapGetters } from 'vuex';
  import { Tabbar, TabItem, Badge } from 'mint-ui';
  import * as Types from '../../../store/app/mutation-type';


  export default {
    name: 'base-footer',
    components: {
      Tabbar,
      TabItem,
      Badge
    },
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
        // 监听this.selected，同步改变vuex中的tabKey的值
        handler(newValue, oldValue) {
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
  a{
    text-decoration: none;
  }
  a:hover{
    text-decoration: none;
  }
  .footer-content{
    .footer-tabbar{
      border-top: 1px solid #e5e5e5;
      background: #fff;
    }
    .tabbar-item{
      position: relative;
      &-icon{
        color: #333;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
      }
      &-span{
        color: #4d4d4d;
      }
    }
    .tabbar-item.is-selected {
      background-color: #fff;
      .tabbar-item-icon{
        color: #c54041;
      }
      .tabbar-item-span{
        color: #d76c68;
      }
    }
    .tabbar-badge{
      position: absolute;
      top: 4px;
      right: 16px;
    }
  }
</style>
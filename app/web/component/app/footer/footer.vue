<template>
  <div class="footer-content">
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
      </mt-tab-item>
      <mt-tab-item class="tabbar-item" id="我的">
        <i slot="icon" class="iconfont icon-user tabbar-item-icon"></i>
        <span class="tabbar-item-span">我的</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script type="text/babel">
  /**
   * 底部共有组件footer
   * Created by tianrenjie on 2018/8/22
   */
  import Vue from 'vue';
  import _ from 'lodash';
  import { mapGetters } from 'vuex';
  import { Tabbar, TabItem } from 'mint-ui';
  import * as Types from '../../../store/app/mutation-type';

  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);

  export default {
    name: 'base-footer',
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
    watch: {
      selected: {
        handler(newValue, oldValue) {
          if (!_.isEqual(newValue, oldValue)) {
            return Promise.all([
              this.$store.dispatch(Types.TAB_BAR_CHANGE, { tabKey: newValue })
            ]);
          }
        },
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
  }
</style>
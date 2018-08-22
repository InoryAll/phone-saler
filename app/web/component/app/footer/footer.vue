<template>
  <div>
    <mt-tabbar
      v-model="selected"
      :fixed="true"
    >
      <mt-tab-item id="首页">
        <i slot="icon" class="iconfont icon-home"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="分类">
        <i slot="icon" class="iconfont icon-appstore"></i>
        分类
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <i slot="icon" class="iconfont icon-shopping"></i>
        购物车
      </mt-tab-item>
      <mt-tab-item id="我的">
        <i slot="icon" class="iconfont icon-user"></i>
        我的
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
  import { Tabbar, TabItem } from 'mint-ui';

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
    computed: {},
    methods: {},
  };
</script>
<style type="less">

</style>
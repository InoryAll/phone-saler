<template>
  <div class="count-util">
    <mt-cell :title="title">
      <span>
        <button class="setting-content-count-sub" @click="handleCountSub">-</button>
        <input type="text" :value="count" class="setting-content-count-number">
        <button class="setting-content-count-add" @click="handleCountAdd">+</button>
      </span>
    </mt-cell>
  </div>
</template>
<script type="text/babel">
  /**
   * 数量控制组件
   */

  export default {
    name: 'count-util',
    components: {},
    props: {
      title: String,
      count: Number,
      onChange: Function,
    },
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {
      handleCountAdd() {
        this.onChange(this.count + 1);
      },
      handleCountSub() {
        this.onChange(this.count - 1);
      }
    },
  };
</script>
<style lang="less">
  .count-util{
    a{
      text-decoration: none;
    }
    button,input{
      outline: none;
    }
    .mint-cell{
      background-image: none;
    }
    .mint-cell-wrapper{
      background-image: none;
      padding: 0 8px;
    }
    .mint-cell-text{
      font-size: 15px;
      color: #333;
    }
    .setting-content-count-add{
      border: none;
      background: #f5f5f5;
      color: #999;
      font-weight: bold;
      font-size: 18px;
    }
    .setting-content-count-sub{
      border: none;
      background: #fafafa;
      color: #c9c9c9;
      font-weight: bold;
      font-size: 18px;
    }
    .setting-content-count-number{
      border: none;
      background: #f5f5f5;
      color: #3e4245;
      width: 30px;
      text-align: center;
      font-weight: bold;
    }
  }
</style>
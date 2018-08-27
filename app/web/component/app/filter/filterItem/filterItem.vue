<template>
  <div class="phone-filter-item">
    <h3 class="phone-filter-item-h3">- {{title}} -</h3>
    <ul class="phone-filter-item-list clearfix">
      <li v-for="(item, index) in filterArray" class="list-item" :key="index">
        <a class="list-link" :href="item.link">
          <img class="list-item-img" :src="item.url" alt="图片">
          <span class="list-item-span">{{item.detail}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">
  /**
   * 筛选项
   */
  export default {
    name: 'filter-item',
    components: {},
    props: {
      title: {
        type: String,
        default: '这是一个标题',
      },
      filterArray: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {},
  };
</script>
<style lang="less">
  .phone-filter-item{
    &-h3{
      margin: 0;
      padding: 20px 0 10px;
      font-size: 16px;
      text-align: center;
      color: #333;
    }
    .list-link{
      display: block;
      width: 100%;
      height: 100%;
    }
    .list-item{
      float: left;
      width: 33.33%;
      text-align: center;
      margin-top: 10px;
      &-img{
        display: block;
        width: 64px;
        height: 64px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 4px;
        line-height: 64px;
        text-align: center;
      }
      &-span{
        display: block;
        color: #808080;
        padding: 4px 0;
        margin: 0 auto;
      }
    }
  }
</style>
<template>
  <div class="phone-mine-content-card">
    <h3 class="phone-mine-content-card-title">{{title}}</h3>
    <ul class="phone-mine-content-card-list clearfix">
      <li class="list-item" v-for="item in mineCardArray">
        <a :href="item.link" class="list-link">
          <div class="list-item-box">
            <i class="iconfont list-item-icon" :class="item.icon"></i>
          </div>
          <span class="list-item-span">{{item.des}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">
  /**
   * 我的内容卡片组件
   */
  export default {
    name: 'mine-content-card',
    components: {},
    props: {
      title: String,
      mineCardArray: Array,
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
  .phone-mine-content-card{
    padding: 10px 6px;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    &-title{
      margin: 0;
      padding: 0 0 10px 0;
      font-size: 14px;
      color: #9b9b9b;
    }
    &-list{
      margin: 0;
      padding: 0;
      .list-item{
        float: left;
        width: 25%;
        .list-link{
          display: block;
          text-align: center;
        }
        &-box{
          .list-item-icon{
            font-size: 24px;
            color: #666;
          }
        }
        &-span{
          color: #666;
          font-size: 14px;
        }
      }
    }
  }
</style>
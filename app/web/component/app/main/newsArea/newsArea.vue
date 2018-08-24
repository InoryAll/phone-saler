<template>
  <div class="product-news-area">
    <h3 class="news-area-h3">
      - 最近热点信息 -
      <span class="news-area-span">
        <a class="loadMore" href="">更多</a>
      </span>
    </h3>
    <ul class="news-area-list">
      <li class="list-item">
        <a href="" class="list-link">
          <img src="../../../../../web/asset/images/phone-saler.jpg" alt="" class="list-img">
          <span class="first-span">最近最火热销售的王牌手机: 苹果占了市场份额的80% 三星等其次.</span>
        </a>
      </li>
      <li class="list-item list-addon">
        <a href="" class="list-link">
          <span class="list-span">梦幻无级别第一大唐武器，再次超过藏宝阁交易额上限</span>
        </a>
      </li>
      <li class="list-item list-addon" >
        <a href="" class="list-link">
          <span class="list-span">连续领取八本迁移兽决都是垃圾，李哥告别</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">
  /**
   * 新闻展示区域
   */
  export default {
    name: 'news-area',
    components: {},
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {},
  };
</script>
<style lang="less">
  .product-news-area{
    border-bottom: 10px solid #f5f5f5;
    .news-area{
      &-h3{
        position: relative;
        padding: 12px 4px;
        font-size: 14px;
        text-align: center;
        margin: 0;
        color: #333;
        border-bottom: 1px solid #e5e5e5;
      }
      &-span{
        position: absolute;
        right: 10px;
        .loadMore{
          color: #333;
          font-size: 14px;
        }
      }
      &-list{
        padding: 12px 8px 0 8px;
        .list-item{
          padding: 4px 0;
        }
        .list-addon{
          margin-left: 18px;
          list-style-type: square;
        }
        .list-link{
          display: flex;
          .list-img{
            display: inline-block;
            width: 75px;
            height: 55px;
          }
          .first-span{
            display: inline-block;
            height: 55px;
            line-height: 27px;
            font-size: 14px;
            color: #333;
            padding: 0 10px;
          }
          .list-span{
            color: #666;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
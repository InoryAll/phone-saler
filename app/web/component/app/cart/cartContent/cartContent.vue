<template>
  <div class="phone-cart-content">
    <ul class="cart-content-list">
      <li class="list-item">
        <a href="" class="list-link">
          <mt-cell-swipe
            :right="[
          {
            content: '删除',
            style: { background: '#d76c68', color: '#fff' },
            handler: () => this.$messagebox('delete')
          }
        ]">
            <div slot="title" class="cell-title">
              <p class="cell-title-time">5分钟</p>
              <div class="cell-title-item clearfix">
                <div class="item-left">
                  <img class="item-left-img" src="../../../../../web/asset/images/grid/grid-1.png" alt="图片">
                </div>
                <div class="item-right">
                  <p class="item-right-name">韦陀护法</p>
                  <p class="item-right-detail">
                    <span class="detail-tool">成长:1.2572</span>
                    <span class="detail-tool">5技能</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="cell-right">
              <p class="cell-right-status">等待支付</p>
              <p class="cell-right-price">￥278.8</p>
            </div>
          </mt-cell-swipe>
        </a>
      </li>
      <li class="list-item">
        <a href="" class="list-link">
          <mt-cell-swipe
            :right="[
          {
            content: '删除',
            style: { background: '#d76c68', color: '#fff' },
            handler: () => this.$messagebox('delete')
          }
        ]">
            <div slot="title" class="cell-title">
              <p class="cell-title-time">1小时25分钟</p>
              <div class="cell-title-item clearfix">
                <div class="item-left">
                  <img class="item-left-img" src="../../../../../web/asset/images/grid/grid-2.png" alt="图片">
                </div>
                <div class="item-right">
                  <p class="item-right-name">大唐官府</p>
                  <p class="item-right-detail">
                    <span class="detail-tool">人物修炼:36</span>
                    <span class="detail-tool">宠物修炼:36</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="cell-right">
              <p class="cell-right-status">等待支付</p>
              <p class="cell-right-price">￥1278.8</p>
            </div>
          </mt-cell-swipe>
        </a>
      </li>
    </ul>
    <div class="cart-content-computed">
      <span class="computed-count">商品:2</span>
      <span class="computed-total">总计:<strong class="computed-total-price">￥580.8</strong></span>
      <a href="" class="computed-link">
        结算(2)
      </a>
    </div>
  </div>
</template>
<script type="text/babel">
  /**
   * 购物车内容组件
   */
  import { CellSwipe } from 'mint-ui';

  export default {
    name: 'cart-content',
    components: {
      CellSwipe
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
  .phone-cart-content{
    .cart-content-list{
      .list-item{
        background: #fff;
        border-bottom: 1px solid #e5e5e5;
      }
      .list-link{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .cell-title{
      padding: 20px 10px;
      &-time{
        margin: 0;
        font-size: 12px;
        color: #808080;
      }
      &-item{
        padding-top: 10px;
      }
      .item-left{
        float: left;
        &-img{
          display: block;
          width: 60px;
          height: 60px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
      }
      .item-right{
        float: left;
        &-name{
          margin: 0;
          color: #333;
          line-height: 30px;
          padding-left: 10px;
        }
        &-detail{
          margin: 0;
          padding-left: 10px;
          .detail-tool{
            color: #808080;
            font-size: 12px;
          }
        }
      }
    }
    .cell-right{
      &-status{
        margin: 0;
        padding-top: 20px;
        color: #333;
        line-height: 30px;
      }
      &-price{
        margin: 0;
        color: #d76c68;
        font-weight: bold;
      }
    }
    .mint-cell-swipe-button{
      line-height: 136px;
      padding: 0 20px;
    }
    .cart-content-computed{
      position: absolute;
      bottom: 0;
      width: 100%;
      background: #fff;
      .computed-count{
        display: inline-block;
        padding: 12px 10px;
        color: #333;
      }
      .computed-total{
        &-price{
          color: #d76c68;
        }
      }
      .computed-link{
        display: block;
        float: right;
        background: #d76c68;
        color: #fff;
        padding: 12px 30px;
      }
    }
  }
</style>
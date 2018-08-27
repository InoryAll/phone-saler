<template>
  <div class="phone-recommend-product">
    <h3 v-if="hasHeader" class="recommend-product-h3">- 推荐商品 -</h3>
    <ul class="recommend-product-list">
      <li class="list-item">
        <a href="" class="list-link clearfix">
          <img class="list-item-img" src="../../../../../web/asset/images/card/card-1.png" alt="图片">
          <div class="list-item-des">
            <p class="des-title"><span class="tip">还</span>凌波城</p>
            <p class="des-detail">
              <span class="des-span">成就：2137</span>
              <span class="des-span">总修：46</span>
              <span class="des-span">总宠修：14</span>
            </p>
          </div>
          <div class="list-item-price">
            <p class="price-real">￥5555</p>
            <p class="price-count">1人购买</p>
          </div>
        </a>
      </li>
      <li class="list-item">
        <a href="" class="list-link clearfix">
          <img class="list-item-img" src="../../../../../web/asset/images/card/card-2.png" alt="图片">
          <div class="list-item-des">
            <p class="des-title">大唐官府</p>
            <p class="des-detail">
              <span class="des-span">成就：2742</span>
              <span class="des-span">总修：46</span>
              <span class="des-span">总宠修：36</span>
            </p>
          </div>
          <div class="list-item-price">
            <p class="price-real">￥8000</p>
            <p class="price-count">4人购买</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">
  /**
   * 推荐产品
   */
  export default {
    name: 'recommend-product',
    components: {},
    props: {
      hasHeader: {
        type: Boolean,
        default: true,
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
 .phone-recommend-product{
   .recommend-product{
    &-h3{
      padding: 12px 4px;
      font-size: 14px;
      text-align: center;
      margin: 0;
      color: #333;
      border-bottom: 1px solid #e5e5e5;
    }
     &-list{
       margin: 0;
     }
   }
   .list-item{
     padding: 14px 12px;
     border-bottom: 1px solid #e5e5e5;
     .list-link{
       display: block;
       width: 100%;
       height: 100%;
     }
     &-img{
       float: left;
       width: 60px;
       height: 60px;
       border: 1px solid #ccc;
       border-radius: 4px;
     }
     &-des{
       float: left;
       .des-title{
         margin: 0;
         padding: 0 10px;
         color: #333;
         font-size: 14px;
          .tip{
            display: inline-block;
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            margin-right: 4px;
            color: #fff;
            background: #d76c68;
            border-radius: 4px;
          }
       }
       .des-detail{
         margin: 0;
         padding: 4px 10px;
         font-size: 12px;
          .des-span{
            color: #808080;
          }
       }
     }
     &-price{
       float: right;
       .price-real{
         font-size: 14px;
         color: #d76c68;
         font-weight: bold;
         text-align: right;
         margin: 0;
       }
       .price-count{
         font-size: 12px;
         color: #808080;
         text-align: right;
         margin: 0;
       }
     }
   }
   .list-item:last-child{
     border: none;
   }
 }
</style>
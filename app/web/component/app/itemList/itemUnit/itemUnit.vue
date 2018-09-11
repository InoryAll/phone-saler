<template>
  <div class="phone-item-unit">
    <ul class="phone-item-unit-list">
      <li class="list-item clearfix">
        <a href="" class="list-link clearfix">
          <div class="list-item-left">
            <img src="../../../../../web/asset/images/grid/grid-1.png" alt="图片" class="list-item-left-img">
            <div class="list-item-des">
              <p class="des-title">
                iPhone X
                <span class="des-title-span">热销中</span>
              </p>
              <p class="des-detail">
                <span class="des-detail-tool">5.8寸大屏幕</span>
                <span class="des-detail-tool">IOS11.0系统</span>
              </p>
              <div class="des-keywords">
                <span class="des-keywords-tip">品牌</span>
                <span class="des-keywords-tip">速度快</span>
              </div>
            </div>
          </div>
          <div class="list-item-right">
            <p class="right-area">无与伦比-兰亭序</p>
            <p class="right-price">￥2300</p>
            <p class="right-timestamp">2小时前</p>
          </div>
        </a>
      </li>
      <li class="list-item clearfix">
        <a href="" class="list-link clearfix">
          <div class="list-item-left">
            <img src="../../../../../web/asset/images/grid/grid-2.png" alt="图片" class="list-item-left-img">
            <div class="list-item-des">
              <p class="des-title">
                iPhone X
                <span class="des-title-span">热销中</span>
              </p>
              <p class="des-detail">
                <span class="des-detail-tool">5.8寸大屏幕</span>
                <span class="des-detail-tool">IOS11.0系统</span>
              </p>
              <div class="des-keywords">
                <span class="des-keywords-tip">品牌</span>
                <span class="des-keywords-tip">速度快</span>
              </div>
            </div>
          </div>
          <div class="list-item-right">
            <p class="right-area">无与伦比-兰亭序</p>
            <p class="right-price">￥2300</p>
            <p class="right-timestamp">2小时前</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">
  /**
   * 商品单元组件
   */

  export default {
    name: 'item-unit',
    components: {},
    data() {
      return {};
    },
    computed: {},
    methods: {},
  };
</script>
<style lang="less">
  .phone-item-unit{
    &-list{
      margin: 0;
      padding: 0;
    }
    .list-link{
      display: block;
    }
    .list-item{
      padding: 20px 10px;
      border-bottom: 1px solid #e5e5e5;
      &-left{
        float: left;
        &-img{
          display: inline-block;
          width: 60px;
          height: 60px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        .list-item-des{
          display: inline-block;
          vertical-align: middle;
          padding: 0 10px;
          .des-title{
            margin: 0;
            color: #333;
            font-size: 16px;
            &-span{
              font-size: 14px;
              color: #808080;
              padding: 0 6px;
              border-left: 1px solid #e5e5e5;
            }
          }
          .des-detail{
            margin: 0;
            color: #808080;
            padding: 2px 0 6px;
            font-size: 12px;
            &-tool{
              padding-right: 6px;
            }
          }
          .des-keywords{
            font-size: 12px;
            &-tip{
              color: #4d4d4d;
              padding: 3px 9px;
              background: #e8e8e8;
              margin-right: 4px;
              border-radius: 6px;
            }
          }
        }
      }
      &-right{
        float: right;
        text-align: right;
        .right-area{
          color: #808080;
          margin: 0;
          font-size: 12px;
        }
        .right-price{
          margin: 0;
          padding: 2px 0 6px;
          font-weight: bold;
          color: #d76c68;
        }
        .right-timestamp{
          margin: 0;
          font-size: 12px;
          color: #808080;
        }
      }
    }
  }
</style>
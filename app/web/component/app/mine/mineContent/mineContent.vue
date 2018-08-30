<template>
  <div class="phone-mine-content">
    <mt-cell title="标题" :is-link="true">
      <div class="phone-mine-content-user clearfix" slot="title">
        <div class="user-box">
          <img src="../../../../../web/asset/images/card/card-1.png" alt="图片" class="user-box-img">
        </div>
        <div class="user-detail">
          <p class="user-detail-name">小瓜°</p>
          <p class="user-detail-phone">15861368488</p>
          <p class="user-detail-email">110873204@qq.com</p>
        </div>
      </div>
    </mt-cell>
    <div class="phone-mine-content-money clearfix">
      <div class="phone-mine-content-money-left">
        <i class="iconfont icon-YUAN content-money-icon"></i>
        <span class="content-money-span">余额</span>
        <strong class="content-money-strong">￥0</strong>
      </div>
      <div class="phone-mine-content-money-right">
        <span class="right-span"><a class="right-span-link" href="">提现</a></span>
        <span class="right-span"><a class="right-span-link" href="">买点卡</a></span>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  /**
   * 我的内容组件
   */
  import { Cell } from 'mint-ui';

  export default {
    name: 'mine-content',
    components: {
      Cell
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
  .phone-mine-content{
    &-user{
      padding: 20px 0;
      background: #fff;
      .user-box{
        float: left;
          &-img{
            display: block;
            width: 80px;
            height: 80px;
            border: 1px solid #ccc;
            border-radius: 8px;
          }
      }
      .user-detail{
        padding-left: 10px;
        float: left;
        &-name{
          margin: 0;
          color: #333;
          font-size: 24px;
        }
        &-phone{
          margin: 0;
          color: #4a4a4a;
          line-height: 36px;
          font-size: 14px;
        }
        &-email{
          margin: 0;
          color: #4a4a4a;
          line-height: 20px;
          font-size: 14px;
        }
      }
    }
    &-money{
      padding: 10px 0 10px 10px;
      background: #fff;
      border-top: 1px solid #e5e5e5;
      &-left{
        float: left;
        .content-money{
          &-icon{
            font-size: 24px;
            line-height: 24px;
            color: #666;
            vertical-align: middle;
          }
          &-span{
            display: inline-block;
            color: #333;
            line-height: 24px;
            vertical-align: middle;
          }
          &-strong{
            display: inline-block;
            color: #d76c68;
            line-height: 24px;
            vertical-align: middle;
          }
        }
      }
      &-right{
        float: right;
        .right-span{
          display: inline-block;
          color: #333;
          padding: 0 10px;
          &-link{
            color: #333;
          }
        }
        .right-span + .right-span{
          border-left: 1px solid #e5e5e5;
        }
      }
    }
  }
</style>
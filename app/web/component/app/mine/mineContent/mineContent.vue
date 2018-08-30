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
    <div class="phone-mine-content-function">
      <ul class="phone-mine-content-function-list clearfix">
        <li class="list-item">
          <a href="" class="list-link">
            <h3 class="list-item-h3">0</h3>
            <span class="list-item-span">收藏</span>
          </a>
        </li>
        <li class="list-item">
          <a href="" class="list-link">
            <h3 class="list-item-h3">20</h3>
            <span class="list-item-span">足迹</span>
          </a>
        </li>
        <li class="list-item">
          <a href="" class="list-link">
            <div class="list-item-box">
              <i class="iconfont icon-setting list-item-icon"></i>
            </div>
            <span class="list-item-span">订阅</span>
          </a>
        </li>
        <li class="list-item">
          <a href="" class="list-link">
            <div class="list-item-box">
              <i class="iconfont icon-detail list-item-icon"></i>
            </div>
            <span class="list-item-span">排行榜</span>
          </a>
        </li>
      </ul>
    </div>
    <MainContentCard
      title="我的交易"
      :mineCardArray="[{
        link: '',
        icon: 'icon-detail',
        des: '全部订单',
      }, {
        link: '',
        icon: 'icon-YUAN',
        des: '我的还价',
      }, {
        link: '',
        icon: 'icon-user',
        des: '指定我',
      }, {
        link: '',
        icon: 'icon-shopping',
        des: '我的出售',
      }]"
    ></MainContentCard>
    <MainContentCard
      title="我的交易"
      :mineCardArray="[{
        link: '',
        icon: 'icon-search',
        des: '精灵问答',
      }, {
        link: '',
        icon: 'icon-appstore',
        des: '手机服务',
      }]"
    ></MainContentCard>
  </div>
</template>
<script type="text/babel">
  /**
   * 我的内容组件
   */
  import { Cell } from 'mint-ui';
  import MainContentCard from './mineContentCard/mineContentCard';

  export default {
    name: 'mine-content',
    components: {
      Cell,
      MainContentCard
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
    &-function{
      padding: 20px 0;
      background: #fff;
      border-top: 6px solid #f5f5f5;
      border-bottom: 6px solid #f5f5f5;
      &-list{
        margin: 0;
        padding: 0;
      }
      .list-item{
        float: left;
        width: 25%;
        .list-link{
          display: block;
          text-align: center;
        }
        &-h3{
          font-size: 20px;
          color: #333;
          margin: 0;
          line-height: 30px;
        }
        &-span{
          color: #999;
          font-size: 12px;
        }
        &-box{
          .list-item-icon{
            color: #666;
            font-size: 20px;
            line-height: 30px;
          }
        }
      }
    }
  }
</style>
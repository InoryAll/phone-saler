<template>
  <div class="phone-item-detail">
    <div class="phone-item-detail-header">
      <div class="header-content clearfix">
        <div class="header-left">
          <i class="iconfont icon-left header-icon"></i>
        </div>
        商品详情
        <div class="header-right">
          <i class="iconfont icon-mail header-icon"></i>
        </div>
      </div>
    </div>
    <div class="detail-swiper">
      <Swiper></Swiper>
    </div>
    <div class="detail-des">
      <div class="detail-des-price">
        ￥<strong class="detail-des-price-strong">708-1368</strong>
      </div>
      <div class="detail-des-old-price">
        价格<span class="detail-des-old-price-span">￥715.16-1400.82</span>
      </div>
      <div class="detail-des-name">
        分期免息【比官网少50元】Xiaomi/小米红米6pro手机红米6pro
      </div>
      <div class="detail-des-other clearfix">
        <span class="detail-des-other-span">快递：免运费</span>
        <span class="detail-des-other-span">月销681笔</span>
        <span class="detail-des-other-span">江苏扬州</span>
      </div>
    </div>
    <div class="setting-panel">
      <mt-cell title="服务" is-link @click.native="handleServiceClick">
        <span>7天无理由·公益宝贝</span>
      </mt-cell>
      <mt-cell title="规格" is-link>
        <span>请选择机身颜色 套餐类型 存储容量</span>
      </mt-cell>
      <mt-cell title="参数" is-link>
        <span>CPU品牌 CPU型号...</span>
      </mt-cell>
    </div>
    <mt-popup
      class="detail-service"
      v-model="serviceVisible"
      position="bottom">
      <div class="detail-service-content">
        <div class="detail-service-content-base">
          <h3>基础服务</h3>
        </div>
        <div class="detail-service-content-other">
          <h3>其他</h3>
        </div>
      </div>
    </mt-popup>
    <mt-popup
      class="detail-setting"
      v-model="settingVisible"
      position="bottom">
    </mt-popup>
    <mt-popup
      class="detail-params"
      v-model="paramsVisible"
      position="bottom">
    </mt-popup>
  </div>
</template>
<script type="text/babel">
  /**
   *  产品详情组件
   */
  import { Cell, Popup } from 'mint-ui';
  import Swiper from '../main/swiper/swiper';

  export default {
    name: 'item-detail',
    components: {
      Cell,
      Swiper
    },
    data() {
      return {
        serviceVisible: false,
        settingVisible: false,
        paramsVisible: false,
      };
    },
    computed: {},
    watch: {},
    methods: {
      handleServiceClick() {
        this.serviceVisible = true;
      },
    },
  };
</script>
<style lang="less">
  .phone-item-detail{
    height: 100%;
    overflow: scroll;
    &-header{
      background: #fff;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 2px;
    }
    .header-content{
      font-size: 16px;
      text-align: center;
      line-height: 36px;
    }
    .header-right{
      float: right;
      margin-right: 6px;
    }
    .header-icon{
      font-size: 18px;
      line-height: 36px;
    }
    .header-left{
      float: left;
      padding-left: 10px;
      .header-icon{
        color: #333;
        font-size: 20px;
        line-height: 36px;
      }
    }
    .detail-swiper{
      .phone-main-carousel{
        height: 350px;
      }
      .phone-main-img{
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 160px;
      }
    }
    .detail-des{
      padding: 10px;
      background: #fff;
      &-price{
        font-size: 16px;
        color: #ec5e2a;
        &-strong{
          font-size: 20px;
        }
      }
      &-old-price{
        font-size: 14px;
        color: #828282;
        &-span{
          color: #999;
          text-decoration: line-through;
        }
      }
      &-name{
        padding: 10px 0;
        color: #333;
        font-weight: bold;
        font-size: 16px;
      }
      &-other{
        &-span{
          color: #999;
          float: left;
          width: 33.33%;
        }
        &-span:nth-child(2){
          text-align: center;
        }
        &-span:nth-child(3){
          text-align: right;
        }
      }
    }
    .setting-panel{
      border-top: 10px solid #f8f8f8;
      border-bottom: 10px solid #f8f8f8;
      a,a:focus,a:active{
        text-decoration: none;
      }
    }
    .detail-service{
      width: 100%;
      &-content{
        background: #fff;
        padding: 20px 10px;
      }
    }
  }
</style>
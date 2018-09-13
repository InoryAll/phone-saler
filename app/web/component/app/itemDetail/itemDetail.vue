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
      <mt-cell title="规格" is-link @click.native="handleSettingClick">
        <span>请选择机身颜色 套餐类型 存储容量</span>
      </mt-cell>
      <mt-cell title="参数" is-link @click.native="handleParamsClick">
        <span>CPU品牌 CPU型号...</span>
      </mt-cell>
    </div>
    <mt-popup
      class="detail-service"
      v-model="serviceVisible"
      position="bottom">
      <div class="detail-service-content">
        <div class="detail-service-content-base">
          <h3 class="content-base-title">基础服务</h3>
          <ul class="content-base-list">
            <li class="list-item clearfix">
              <div class="list-item-left">
                <i class="iconfont icon-check-circle list-item-icon"></i>
              </div>
              <div class="list-item-right">
                <p class="article-title">7天无理由</p>
                <p class="article-detail">满足7天无理由申请托获得前提下，包邮商品需要买家承担退货邮费，非包邮商品需要买家承担发货和退货邮费</p>
              </div>
            </li>
            <li class="list-item clearfix">
              <div class="list-item-left">
                <i class="iconfont icon-check-circle list-item-icon"></i>
              </div>
              <div class="list-item-right">
                <p class="article-title">24小时内发货</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="detail-service-content-other">
          <h3 class="content-other-title">其他</h3>
          <ul class="content-other-list">
            <li class="list-item clearfix">
              <div class="list-item-left">
                <i class="iconfont icon-check-circle list-item-icon"></i>
              </div>
              <div class="list-item-right">
                <p class="article-title">支付宝</p>
              </div>
            </li>
            <li class="list-item clearfix">
              <div class="list-item-left">
                <i class="iconfont icon-check-circle list-item-icon"></i>
              </div>
              <div class="list-item-right">
                <p class="article-title">微信支付</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="detail-service-content-btn">
          <a class="content-btn" @click="handleServiceFinish">完成</a>
        </div>
      </div>
    </mt-popup>
    <mt-popup
      class="detail-setting"
      v-model="settingVisible"
      position="bottom">
      <div class="detail-setting-content">
        <div class="setting-content-product clearfix">
          <div class="product-left">
            <img src="../../../../web/asset/images/phone.png" alt="图片" class="product-left-img">
          </div>
          <div class="product-right">
            <p class="product-right-price">￥708-1368</p>
            <p class="product-right-amount">库存20868件</p>
            <p class="product-right-tip">请选择 机身颜色 套餐类型 存储容量</p>
          </div>
          <div class="product-close">
            <a class="product-close-link" @click="handleSettingClose">
              <i class="iconfont icon-close-circle product-close-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </mt-popup>
    <mt-popup
      class="detail-params"
      v-model="paramsVisible"
      position="bottom">
      <div class="detail-params-content">
        <h3 class="params-content-title">产品参数</h3>
        <ul class="params-content-list">
          <li class="list-item">
            <label class="list-item-label">CPU品牌</label>
            <span class="list-item-span">高通</span>
          </li>
          <li class="list-item">
            <label class="list-item-label">CPU型号</label>
            <span class="list-item-span">晓龙625</span>
          </li>
          <li class="list-item">
            <label class="list-item-label">上市时间</label>
            <span class="list-item-span">2018-6</span>
          </li>
          <li class="list-item">
            <label class="list-item-label">产品名称</label>
            <span class="list-item-span">红米6 Pro</span>
          </li>
          <li class="list-item">
            <label class="list-item-label">屏幕尺寸</label>
            <span class="list-item-span">5.84英寸</span>
          </li>
          <li class="list-item">
            <label class="list-item-label">机身厚度</label>
            <span class="list-item-span">8.75mm</span>
          </li>
          <li class="list-item">
            <label class="list-item-label">版本是否包含中国大陆</label>
            <span class="list-item-span">是</span>
          </li>
          <li class="list-item">
            <label class="list-item-label">电池容量</label>
            <span class="list-item-span">4000mAh</span>
          </li>
          <li class="list-item">
            <label class="list-item-label">品牌</label>
            <span class="list-item-span">Xiaomi/小米</span>
          </li>
          <li class="list-item">
            <label class="list-item-label">型号</label>
            <span class="list-item-span">红米6 pro</span>
          </li>
          <li class="list-item">
            <label class="list-item-label">键盘类型</label>
            <span class="list-item-span">虚拟触屏键盘</span>
          </li>
          <li class="list-item">
            <label class="list-item-label">分辨率</label>
            <span class="list-item-span">2280x1080</span>
          </li>
          <li class="list-item">
            <label class="list-item-label">手机类型</label>
            <span class="list-item-span">拍照手机.音乐手机.时尚手机.智能手机.4G手机.商务手机.女性手机.老人手机</span>
          </li>
        </ul>
        <div class="params-content-btn">
          <a class="content-btn" @click="handleParamsFinish">完成</a>
        </div>
      </div>
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
      Popup,
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
      handleServiceFinish() {
        this.serviceVisible = false;
      },
      handleParamsClick() {
        this.paramsVisible = true;
      },
      handleParamsFinish() {
        this.paramsVisible = false;
      },
      handleSettingClick() {
        this.settingVisible = true;
      },
      handleSettingClose() {
        this.settingVisible = false;
      },
    },
  };
</script>
<style lang="less">
  .phone-item-detail{
    height: 100%;
    overflow: scroll;
    &-header{
      position: fixed;
      width: 100%;
      height: 38px;
      top: 0;
      left: 0;
      transform: translateZ(9999px);
      background: #fff;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 2px;
      z-index: 9999;
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
      padding-top: 38px;
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
      }
      &-content-base{
        padding: 20px 20px 0 20px;
        .content-base-title{
          font-size: 16px;
          color: #333;
          margin: 0;
          text-align: center;
          padding: 10px 0 20px;
        }
        .content-base-list{
          .list-item{
            padding: 10px 0;
            &-left{
              float: left;
              .list-item-icon{
                color: #ec5e2c;
                font-size: 18px;
                line-height: 20px;
              }
            }
            &-right{
              padding-left: 30px;
              .article-title{
                margin: 0;
                color: #828282;
                font-size: 15px;
              }
              .article-detail{
                margin: 0;
                color: #828282;
                font-size: 13px;
                padding: 4px 0;
              }
            }
          }
        }
      }
      &-content-other{
        padding: 0 20px 0 20px;
        .content-other-title{
          font-size: 16px;
          color: #333;
          margin: 0;
          text-align: center;
          padding: 20px 0;
        }
        .content-other-list{
          .list-item{
            padding: 10px 0;
            &-left{
              float: left;
              .list-item-icon{
                color: #ec5e2c;
                font-size: 18px;
                line-height: 20px;
              }
            }
            &-right{
              padding-left: 30px;
              .article-title{
                margin: 0;
                color: #828282;
                font-size: 15px;
              }
            }
          }
        }
      }
      &-content-btn{
        .content-btn{
          text-decoration: none;
          display: block;
          width: 100%;
          font-size: 16px;
          color: #fff;
          padding: 14px 0;
          text-align: center;
          background: -webkit-linear-gradient(90deg, #f09a38 0%, #eb5829 100%); /* Safari 5.1 - 6.0 */
          background: -o-linear-gradient(90deg, #f09a38 0%, #eb5829 100%); /* Opera 11.1 - 12.0 */
          background: -moz-linear-gradient(90deg, #f09a38 0%, #eb5829 100%); /* Firefox 3.6 - 15 */
          background: linear-gradient(90deg, #f09a38 0%, #eb5829 100%); /* 标准的语法 */
        }
      }
    }
    .detail-params{
      width: 100%;
      max-height: 80%;
      overflow-y: scroll;
      &-content{
        background: #fff;
      }
      .params-content-title{
        background: #fff;
        font-size: 16px;
        color: #555;
        margin: 0;
        text-align: center;
        padding-top: 20px;
        /*position: fixed;*/
        /*width: 100%;*/
        /*height: 37px;*/
        /*top: 0;*/
        /*left: 0;*/
        /*transform: translateZ(9999px);*/
      }
      .params-content-list{
        padding: 10px 0 0;
        .list-item{
          display: flex;
          align-items: center;
          padding: 10px;
          border-bottom: 1px solid #eeeeee;
          &-label{
            color: #999;
            font-weight: normal;
            margin: 0;
            width: 70px;
          }
          &-span{
            display: inline-block;
            width: calc(100% - 20px);
            color: #555;
            padding-left: 20px;
          }
        }
      }
      .params-content-btn{
        padding: 10px;
        background: #fff;
        /*position: fixed;*/
        /*width: 100%;*/
        /*height: 62px;*/
        /*bottom: 0;*/
        /*left: 0;*/
        /*transform: translateZ(9999px);*/
        .content-btn{
          text-decoration: none;
          display: block;
          width: 100%;
          padding: 10px 0;
          color: #fff;
          border-radius: 21px;
          height: 42px;
          box-sizing: border-box;
          font-size: 16px;
          text-align: center;
          background: -webkit-linear-gradient(90deg, #ee7f31 0%, #eb5829 100%); /* Safari 5.1 - 6.0 */
          background: -o-linear-gradient(90deg, #ee7f31 0%, #eb5829 100%); /* Opera 11.1 - 12.0 */
          background: -moz-linear-gradient(90deg, #ee7f31 0%, #eb5829 100%); /* Firefox 3.6 - 15 */
          background: linear-gradient(90deg, #ee7f31 0%, #eb5829 100%); /* 标准的语法 */
        }
      }
    }
    .detail-setting{
      width: 100%;
      max-height: 80%;
      overflow-y: scroll;
      &-content{
        padding: 10px;
        background: #fff;
      }
      .setting-content-product{
        position: relative;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        .product-left{
          float: left;
          &-img{
            display: block;
            width: 100px;
            height: 100px;
          }
        }
        .product-right{
          overflow: hidden;
          position: absolute;
          bottom: 10px;
          left: 110px;
          font-size: 14px;
          color: #333;
          &-price{
            margin: 0;
            font-size: 16px;
            color: #ec5e2a;
          }
          &-amount{
            margin: 0;
          }
          &-tip{
            margin: 0;
          }
        }
        .product-close{
          position: absolute;
          right: 0;
          top: 0;
          &-link{
            display: block;
          }
          &-icon{
            color: #999;
            font-size: 20px;
          }
        }
      }
    }
  }
</style>
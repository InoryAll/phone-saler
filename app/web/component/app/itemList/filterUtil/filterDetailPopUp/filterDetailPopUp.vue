<template>
  <mt-popup
    v-model="visible"
    position="right"
    class="phone-filter-util-pop-up"
  >
    <div class="phone-filter-util-pop-up-content">
      <div class="filter-util-pop-up-header clearfix">
        <a class="filter-util-pop-up-header-left" @click="handlePopUpClose">
          <i class="iconfont icon-left header-left-icon"></i>
        </a>
        <span class="filter-util-pop-up-header-span">筛选</span>
      </div>
      <div class="form-content">
        <form action="">
          <ul class="filter-util-pop-up-list">
            <li class="list-item" :class="{ active: priceCollapse === true, negative: priceCollapse === false }">
              <a class="list-item-header clearfix" @click="handleFilterClick(FILTER_CONFIG.PRICE)">
                <div class="list-item-header-left">
                  价格（元）
                </div>
                <div class="list-item-header-right">
                  <i class="iconfont icon-up"></i>
                </div>
              </a>
              <div class="form-item">
                <mt-field class="form-item-input-group" label="" placeholder="最低" type="number" :attr="{ name: 'lowPrice' }"></mt-field>
                <span class="form-item-input-group-span">-</span>
                <mt-field class="form-item-input-group" label="" placeholder="最高" type="number" :attr="{ name: 'highPrice' }"></mt-field>
              </div>
              <div class="form-item">
                <mt-radio
                  class="form-item-radio-group"
                  :options="['0-999', '1000-1999', '2000-2999', '3000-3999', '4000-4999', '5000+']">
                </mt-radio>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </mt-popup>
</template>
<script type="text/babel">
  /**
   * 产品列表筛选的详细弹窗
   */
  import { Popup, Field, Radio } from 'mint-ui';
  import _ from 'lodash';
  import FILTER_CONFIG from './filterConfig';

  export default {
    name: 'filter-util-pop-up',
    components: {
      Popup,
      Field,
      Radio
    },
    props: {
      filterVisible: Boolean,
      changePopUpVisible: Function,
    },
    data() {
      return {
        FILTER_CONFIG,
        visible: this.filterVisible,
        priceCollapse: '',
      };
    },
    computed: {},
    watch: {
      visible: {
        handler(newValue, oldValue) {
          this.changePopUpVisible(newValue);
        }
      },
      filterVisible: {
        handler(newValue, oldValue) {
          if (!_.isEqual(newValue, this.visible)) {
            this.visible = newValue;
          }
        }
      }
    },
    methods: {
      handlePopUpClose() {
        this.visible = false;
      },
      handleFilterClick(type) {
        const FILTER_TYPE = type;
        switch (FILTER_TYPE) {
          case FILTER_CONFIG.PRICE:
            if (this.priceCollapse === '') {
              this.priceCollapse = false;
            } else {
              this.priceCollapse = !this.priceCollapse;
            }
            break;
          default:
            break;
        }
      }
    },
  };
</script>
<style lang="less">
  @keyframes slideToUp{
    0%{
      height: 200px;
    }
    50%{
      height: 120px;
    }
    100%{
      height: 40px;
    }
  }
  @keyframes slideToDown {
    0%{
      height: 40px;
    }
    50%{
      height: 120px;
    }
    100%{
      height: 200px;
    }
  }

  .phone-filter-util-pop-up{
    width: 90%;
    height: 100%;
    &-content{
      .filter-util-pop-up-header{
        line-height: 36px;
        border-bottom: 2px solid #f5f5f5;
        text-align: center;
        &-left{
          float: left;
          padding-left: 10px;
          .header-left-icon{
            color: #333;
            font-size: 20px;
            line-height: 36px;
          }
        }
        &-span{
          color: #333;
          margin-left: -15px;
          font-size: 16px;
          line-height: 36px;
        }
      }
      .filter-util-pop-up-list{
        .list-item{
          display: block;
          padding: 0 10px;
          overflow-y: hidden;
          height: 200px;
          &-header{
            display: block;
            padding: 10px 0;
            position: relative;
            &-left{
              float: left;
              font-weight: bold;
              color: #333;
            }
            &-right{
              float: right;
              min-width: 16px;
              position: relative;
              color: #666;
              font-weight: bold;
              .iconfont{
                position: absolute;
              }
            }
          }
          .form-item{
            &-input-group{
              display: inline-block;
              width: 47%;
              border: 1px solid #cdcdcd;
              border-radius: 6px;
              min-height: 36px;
              .mint-field-core{
                text-align: center;
                font-size: 14px;
                color: #333;
              }
            }
            &-input-group-span{
              display: inline-block;
              line-height: 36px;
              height: 36px;
              vertical-align: top;
            }
            &-radio-group{
              .mint-cell{
                display: inline-block;
                width: 33.33%;
                text-decoration: none;
              }
              .mint-cell:last-child{
                background-image: none;
              }
              .mint-cell-wrapper{
                padding: 0;
                background-image: none;
                border: none;
              }
              .mint-radio-core{
                display: none;
              }
              .mint-radiolist-label{
                font-size: 13px;
                font-weight: normal;
                text-align: center;
                background: #f2f2f2;
                padding: 12px 0;
                color: #333;
                margin-right: 10px;
                text-indent: -5px;
                border-radius: 4px;
              }
              .mint-cell:nth-of-type(3n) {
                .mint-radiolist-label{
                  margin-right: 0;
                  text-indent: 0;
                }
                .mint-radio-core{
                  width: 100%;
                }
              }
              .mint-radio-input:checked + .mint-radio-core{
                border-color: #d76c68;
              }
              .mint-radio-core{
                box-sizing: border-box;
                display: inline-block;
                background-color: transparent;
                border: 1px solid #f2f2f2;
                border-radius: 4px;
                position: absolute;
                width: calc( 100% - 10px );
                height:  calc( 100% - 14px );
                left: 0;
                top: 0;
              }
              .mint-radio-input:checked + .mint-radio-core::after{
                content: "";
                border-radius: 2px;
                top: 0;
                left: unset;
                right: 0;
                position: absolute;
                border-top: 6px solid #d76c68;
                border-bottom: 6px solid #f2f2f2;
                border-right: 12px solid #d76c68;
                border-left: 12px solid #f2f2f2;
                -webkit-transition: none;
                transition: none;
                -webkit-transform: none;
                transform: none;
                background: red;
              }
              .mint-radio-input:checked{
                color: #d76c68;
              }
            }
          }
        }
      }
    }
    .active{
      .iconfont{
        animation: rotateToDown 0.3s linear 0s 1 normal;
        animation-fill-mode: both;
      }
    }
    .list-item.active{
      animation: slideToDown 0.3s linear 0s 1 normal;
      animation-fill-mode: both;
    }
    .negative{
      .iconfont{
        animation: rotateToUp 0.3s linear 0s 1 normal;
        animation-fill-mode: both;
      }
    }
    .list-item.negative{
      animation: slideToUp 0.3s linear 0s 1 normal;
      animation-fill-mode: both;
    }
    .list-item + .list-item{
      border-top: 1px solid #e5e5e5;
    }
  }
</style>
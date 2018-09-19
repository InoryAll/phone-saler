<template>
  <div v-if="visible" class="phone-address-detail">
    <mt-popup
      class="phone-address-detail-pop-up"
      v-model="visible"
      position="right">
      <div class="phone-address-detail-pop-up-content">
        <div class="phone-address-detail-pop-up-content-header">
          <div class="header-content clearfix">
            <div class="header-left">
              <a @click="handleAddressDetailHide"><i class="iconfont icon-left header-icon"></i></a>
            </div>
            新增收货地址
          </div>
        </div>
        <div class="phone-address-detail-pop-up-content-form">
          <form action="">
            <div class="form-item">
              <mt-field label="收货人" placeholder="收货人姓名" :attr="{ name: 'receiverName' }"></mt-field>
            </div>
            <div class="form-item">
              <mt-field label="联系人电话" placeholder="联系人电话" type="tel" :attr="{ name: 'receiverPhone' }"></mt-field>
            </div>
            <dic class="form-item">
              <mt-cell title="所在地区" value="请选择" is-link></mt-cell>
            </dic>
            <div class="form-item">
              <mt-field label="详细地址" placeholder="请输入详细地址" :attr="{ name: 'detail' }"></mt-field>
            </div>
            <div class="form-item">
              <mt-cell title="设置默认地址">
                <mt-switch v-model="value"></mt-switch>
              </mt-cell>
            </div>
            <div class="form-actions">
              <a class="form-actions-btn" href="">保存</a>
            </div>
          </form>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script type="text/babel">
  /**
   * 地址详情页组件（支持编辑）
   */
  import { Popup, Cell, Field } from 'mint-ui';

  export default {
    name: 'address-detail',
    components: {
      Popup,
      Cell,
      Field
    },
    props: {
      addressDetailVisible: Boolean,
      onDetailVisibleChange: Function,
    },
    data() {
      return {
        visible: this.addressDetailVisible,
      };
    },
    computed: {},
    watch: {
      visible: {
        handler(newValue, oldValue) {
          this.onDetailVisibleChange(newValue);
        },
      },
      addressDetailVisible: {
        handler(newValue, oldValue) {
          this.visible = newValue;
        },
      },
    },
    methods: {
      handleAddressDetailHide() {
        this.addressDetailVisible = false;
      },
    },
  };
</script>
<style lang="less">
  .phone-address-detail{
    position: relative;
    height: 100%;
    overflow: scroll;
    background: #f4f4f4;
    .phone-address-detail-pop-up{
      width: 100%;
      height: 100%;
      background: #f4f4f4;
    }
    &-pop-up-content-header{
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
      color: #000;
    }
    .header-icon{
      font-size: 18px;
      line-height: 36px;
    }
    .header-left{
      float: left;
      padding-left: 10px;
      a{
        text-decoration: none;
      }
      .header-icon{
        color: #333;
        font-size: 20px;
        line-height: 36px;
      }
    }
    .header-right{
      float: right;
      padding-right: 10px;
      &-link{
        color: #444;
        text-decoration: none;
      }
    }
    &-pop-up-content-form{
      padding-top: 37px;
      .form-item{
        a{
          text-decoration: none;
          color: #2c2c2c;
        }
        a:hover, a:focus{
          color: #2c2c2c;
        }
        .mint-cell-wrapper{
          font-size: 14px;
        }
      }
      .form-actions{
        padding: 16px 6px;
        &-btn{
          display: block;
          width: 100%;
          padding: 8px 0;
          border-radius: 18px;
          text-align: center;
          color: #fff;
          background: -webkit-linear-gradient(90deg, #f09436 0%, #ec5f2a 100%); /* Safari 5.1 - 6.0 */
          background: -o-linear-gradient(90deg, #f09436 0%, #ec5f2a 100%); /* Opera 11.1 - 12.0 */
          background: -moz-linear-gradient(90deg, #f09436 0%, #ec5f2a 100%); /* Firefox 3.6 - 15 */
          background: linear-gradient(90deg, #f09436 0%, #ec5f2a 100%); /* 标准的语法 */
        }
      }
    }
  }
</style>
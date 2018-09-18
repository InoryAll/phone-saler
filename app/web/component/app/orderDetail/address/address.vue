<template>
  <div v-if="visible" class="phone-address-list">
    <mt-popup
      class="phone-address-list-pop-up"
      v-model="visible"
      position="right">
      <div class="phone-address-list-pop-up-content">
        <div class="phone-address-list-pop-up-content-header">
          <div class="header-content clearfix">
            <div class="header-left">
              <a @click="handleAddressHide"><i class="iconfont icon-left header-icon"></i></a>
            </div>
            选择收货地址
            <div class="header-right">
              <a class="header-right-link" @click="handleEditAddressShow">管理</a>
            </div>
          </div>
        </div>
        <ul class="phone-address-list-pop-up-content-list">
          <li class="list-item">
            <a href="" class="list-link clearfix">
              <div class="list-item-left">
                <p class="list-item-left-name">王润方</p>
              </div>
              <div class="list-item-right">
                <span class="list-item-right-phone">18885234915</span>
              </div>
              <p class="list-item-address"><span class="tip">[默认地址]</span>云南省昆明市呈贡区 云南大学南苑综合楼</p>
            </a>
          </li>
          <li class="list-item">
            <a href="" class="list-link clearfix">
              <div class="list-item-left">
                <p class="list-item-left-name">王润方</p>
              </div>
              <div class="list-item-right">
                <span class="list-item-right-phone">18885234915</span>
              </div>
              <p class="list-item-address">云南省昆明市呈贡区 云南大学南苑综合楼</p>
            </a>
          </li>
          <li class="list-item">
            <a href="" class="list-link clearfix">
              <div class="list-item-left">
                <p class="list-item-left-name">王润方</p>
              </div>
              <div class="list-item-right">
                <span class="list-item-right-phone">18885234915</span>
              </div>
              <p class="list-item-address">云南省昆明市呈贡区 云南大学南苑综合楼</p>
            </a>
          </li>
        </ul>
        <div class="phone-address-list-pop-up-content-actions">
          <a class="actions-btn" href="">添加新地址</a>
        </div>
      </div>
    </mt-popup>
    <AddressEdit :addressEditVisible="addressEditVisible" :onEditVisibleChange="onEditVisibleChange"></AddressEdit>
  </div>
</template>
<script>
  /**
   * 地址列表组件
   */
  import { Popup } from 'mint-ui';
  import AddressEdit from './addressEdit';

  export default {
    name: 'address-list',
    components: {
      Popup,
      AddressEdit
    },
    props: {
      addressVisible: Boolean,
      onVisibleChange: Function,
    },
    data() {
      return {
        visible: this.addressVisible,
        addressEditVisible: false,
      };
    },
    computed: {},
    watch: {
      visible: {
        handler(newValue, oldValue) {
          this.onVisibleChange(newValue);
        }
      },
      addressVisible: {
        handler(newValue, oldValue) {
          this.visible = newValue;
        }
      },
    },
    methods: {
      handleAddressHide() {
        this.visible = false;
      },
      handleEditAddressShow() {
        this.addressEditVisible = true;
      },
      onEditVisibleChange(val) {
        this.addressEditVisible = val;
      },
    },
  };
</script>
<style lang="less">
  .phone-address-list{
    position: relative;
    height: 100%;
    overflow: scroll;
    background: #f4f4f4;
    .phone-address-list-pop-up{
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
    &-pop-up-content-list{
      padding-top: 37px;
      margin: 0;
      .list-item{
        background: #fff;
        padding: 10px;
        border-bottom: 1px solid #ddd;
        &-left{
          float: left;
          width: 70%;
          &-name{
            color: #0b1b27;
            margin: 0;
            font-size: 16px;
            padding: 6px 0;
          }
        }
        &-right{
          float: right;
          width: 30%;
          color: #0b1b27;
          margin: 0;
          font-size: 16px;
          padding: 6px 0;
        }
        &-address{
          margin: 0;
          color: #0b1b27;
          font-size: 13px;
          .tip{
            color: #ec5e2a;
          }
        }
      }
      .list-link{
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
      }
    }
    &-pop-up-content-actions{
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 10px;
      background: #fff;
      .actions-btn{
        display: block;
        width: 100%;
        color: #fff;
        background: -webkit-linear-gradient(90deg, #f09436 0%, #ec5f2a 100%); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(90deg, #f09436 0%, #ec5f2a 100%); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(90deg, #f09436 0%, #ec5f2a 100%); /* Firefox 3.6 - 15 */
        background: linear-gradient(90deg, #f09436 0%, #ec5f2a 100%); /* 标准的语法 */
        padding: 8px 0;
        text-align: center;
        border-radius: 18px;
        text-decoration: none;
      }
    }
  }
</style>
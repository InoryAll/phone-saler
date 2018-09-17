<template>
  <div class="phone-address-list">
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
            {{title}}
          </div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
  export default {
    name: 'address-list',
    components: {},
    props: {
      addressVisible: Boolean,
      onVisibleChange: Function,
    },
    data() {
      return {
        title: '选择收货地址',
        visible: this.addressVisible,
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
      }
    },
  };
</script>
<style lang="less">
  .phone-address-list{
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
  }
</style>
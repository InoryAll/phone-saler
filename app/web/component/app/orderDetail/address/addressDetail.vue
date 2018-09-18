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
      </div>
    </mt-popup>
  </div>
</template>
<script type="text/babel">
  /**
   * 地址详情页组件（支持编辑）
   */

  export default {
    name: 'address-detail',
    components: {},
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

</style>
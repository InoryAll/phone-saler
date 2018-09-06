<template>
  <mt-popup
    v-model="visible"
    position="right">
    ...
  </mt-popup>
</template>
<script type="text/babel">
  /**
   * 产品列表筛选的详细弹窗
   */
  import { Popup } from 'mint-ui';
  import _ from 'lodash';

  export default {
    name: 'filter-util-pop-up',
    components: {
      Popup,
    },
    props: {
      filterVisible: Boolean,
      changePopUpVisible: Function,
    },
    data() {
      return {
        visible: this.filterVisible,
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
    methods: {},
  };
</script>
<style lang="less">

</style>
<template>
  <div class="phone-product-card">
    <ul class="product-card-list clearfix">
      <li class="list-item">
        <a href="" class="list-link">
          <h3 class="list-item-h3">化生寺</h3>
          <p class="list-item-p">救人一命，胜造七级浮屠</p>
          <span class="list-item-span">热门专题</span>
          <img class="list-item-img" src="../../../../asset/images/card/card-1.png" alt="图片">
        </a>
      </li>
      <li class="list-item">
        <a href="" class="list-link">
          <h3 class="list-item-h3">凌波城</h3>
          <p class="list-item-p">力拔山气气盖世</p>
          <span class="list-item-span">热门专题</span>
          <img class="list-item-img" src="../../../../asset/images/card/card-2.png" alt="图片">
        </a>
      </li>
      <li class="list-item">
        <a href="" class="list-link">
          <h3 class="list-item-h3">狮驼岭</h3>
          <p class="list-item-p">灼灼逼人，可统御百兽</p>
          <span class="list-item-span">热门专题</span>
          <img class="list-item-img" src="../../../../asset/images/card/card-3.png" alt="图片">
        </a>
      </li>
      <li class="list-item">
        <a href="" class="list-link">
          <h3 class="list-item-h3">普陀山</h3>
          <p class="list-item-p">一朵莲花可救苍生</p>
          <span class="list-item-span">热门专题</span>
          <img class="list-item-img" src="../../../../asset/images/card/card-4.png" alt="图片">
        </a>
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">
  /**
   * 产品卡片组件
   */
  export default {
    name: 'product-card',
    components: {},
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {},
  };
</script>
<style lang="less">
  .phone-product-card{
    border-bottom: 10px solid #f5f5f5;
    .product-card-list{
      .list-item{
        width: 50%;
        height: 130px;
        float: left;
        padding: 6px;
        box-sizing: border-box;
        &-h3{
          font-size: 16px;
          color: #333;
          margin: 0;
          padding-bottom: 6px;
        }
        &-p{
          font-size: 12px;
          color: #999;
        }
        &-span{
          color: #666;
          background: #e7e7e7;
          padding: 4px 6px;
          font-size: 12px;
          border-radius: 4px;
        }
        &-img{
          position: absolute;
          width: 60px;
          height: 60px;
          right: 10px;
          bottom: 10px;
        }
      }
      .list-item:nth-child(1){
        border-right: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
      }
      .list-item:nth-child(2) {
        border-bottom: 1px solid #e5e5e5;
      }
      .list-item:nth-child(3){
        border-right: 1px solid #e5e5e5;
      }
      .list-link{
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
      }
    }
  }
</style>
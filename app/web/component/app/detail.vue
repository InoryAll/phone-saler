<template>
  <div style="font-size: 24px; text-align: center">
    <ul>
      <li v-for="item in article" class="detail-li">
        <i>{{item._id}}</i>
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<style type="less">
  .detail-li{
    padding: 20px 10px;
  }
  .detail-li:nth-child(2n) {
    background: #a4a2eb;
  }
  .detail-li:nth-child(2n+1) {
    background: #e6e6ea;
  }
</style>
<script type="text/babel">
  import { mapState } from 'vuex';
  //  import { createNamespacedHelpers } from 'vuex';
  //
  //  const { mapState, mapActions } = createNamespacedHelpers('App');
  export default {
    computed: {
      ...mapState({
        article: state => state.App.article,
      }),
    },
    //    preFetch({ state, dispatch, commit }) {
    //      let { id } = state.route.params;
    //      return Promise.all([
    //        dispatch('FETCH_ARTICLE_DETAIL', { id })
    //      ]);
    //    },
    beforeMount() {
      let { id } = this.$store.state.route.params;
      return Promise.all([
        this.$store.dispatch('FETCH_ARTICLE_DETAIL', { id })
      ]);
    }
  };
</script>

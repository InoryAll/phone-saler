import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../../store/store';
import * as Types from '../../store/app/mutation-type';

import Index from './index/index';
import ItemList from './itemList/itemList';
import ItemDetail from './itemDetail/itemDetail';
import OrderDetail from './orderDetail/orderDetail';
import OrderPay from './orderPay/orderPay';
import OrderList from './orderList/orderList';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/itemList',
      component: ItemList
    },
    {
      path: '/detail',
      component: ItemDetail
    },
    {
      path: '/order',
      component: OrderDetail
    },
    {
      path: '/pay',
      component: OrderPay
    },
    {
      path: '/orderList',
      component: OrderList
    }
  ]
});

// 劫持每一个路由，存入vuex中
// router.beforeEach((to, from, next) => {
//   store.commit(Types.ROUTE_CHANGE, { route: to });
// });

export default router;

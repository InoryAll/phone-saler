import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../../store/store';
import * as Types from '../../store/app/mutation-type';
import ListView from './list';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: ListView
    },
    {
      path: '/list',
      component: ListView
    },
    {
      path: '/detail/:id',
      component: () => import('./detail')
    }
  ]
});

// 劫持每一个路由，存入vuex中
// router.beforeEach((to, from, next) => {
//   store.commit(Types.ROUTE_CHANGE, { route: to });
// });

export default router;

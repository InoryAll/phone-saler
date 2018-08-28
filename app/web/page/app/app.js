import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import store from 'store/store';
import router from 'component/app/router';
import app from './app.vue';
import App from 'app';
import Layout from 'component/layout/app';


import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);
App.component(Layout.name, Layout);

sync(store, router);

export default App.init({
  base: '/app',
  ...app,
  router,
  store
});

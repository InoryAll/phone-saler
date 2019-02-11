'use strict';
import Vue from 'vue';
import Vuex from 'vuex';

import App from './app';
import User from '../component/app/register/vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    App,
    User,
  },
});
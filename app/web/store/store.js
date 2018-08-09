'use strict';
import Vue from 'vue';
import Vuex from 'vuex';

import App from './app';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    App,
  },
});
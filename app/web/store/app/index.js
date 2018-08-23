'use strict';

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  // route: {},
  articleList: [],
  article: [],
  tabKey: '首页',
};

export default {
  state,
  actions,
  getters,
  mutations
};
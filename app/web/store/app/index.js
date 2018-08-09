'use strict';

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  articleList: [],
  article: [],
};

export default {
  state,
  actions,
  getters,
  mutations
};
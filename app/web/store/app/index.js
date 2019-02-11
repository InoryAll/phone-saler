/**
 * vuex导出
 * created by tianrenjie on 2018/9/25
 */

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  tabKey: '首页',
};

export default {
  state,
  actions,
  getters,
  mutations
};
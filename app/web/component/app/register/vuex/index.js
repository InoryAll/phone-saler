/**
 * vuex导出
 * Created by tianrenjie on 2018/9/25
 */
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  user: undefined,
};

export default {
  state,
  actions,
  getters,
  mutations,
};

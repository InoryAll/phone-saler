/**
 * mutation
 * Created by tianrenjie on 2018/9/25
 */
import {
  DO_REGISTER
} from './mutation-type';

const mutations = {
  [DO_REGISTER](state, { data }) {
    state.user = data.data;
  },
};

export default mutations;

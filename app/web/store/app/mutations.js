/**
 * mutation
 * Created by tianrenjie on 2018/9/25
 */

import {
  ROUTE_CHANGE,
  TAB_BAR_CHANGE,
} from './mutation-type';

const mutations = {
  // [ROUTE_CHANGE] (state, { route }){
  //   state.route = route;
  // },
  [TAB_BAR_CHANGE] (state, { tabKey }) {
    state.tabKey = tabKey;
  },
  [SET_ARTICLE_LIST] (state, items){
    state.articleList = items;
  },
  [SET_ARTICLE_DETAIL](state, data) {
    state.article = data;
  }
};
export default mutations;

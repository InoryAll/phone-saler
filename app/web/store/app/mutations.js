'use strict';

import {
  SET_ARTICLE_LIST,
  SET_ARTICLE_DETAIL,
  ROUTE_CHANGE,
} from './mutation-type';

const mutations = {
  [ROUTE_CHANGE] (state, { route }){
    console.log(route);
    state.route = route;
  },
  [SET_ARTICLE_LIST] (state, items){
    state.articleList = items;
  },
  [SET_ARTICLE_DETAIL](state, data) {
    state.article = data;
  }
};
export default mutations;

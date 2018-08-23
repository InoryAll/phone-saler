'use strict';

import * as Type from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const host = 'http://127.0.0.1:7001';

const actions = {

  // 处理tabbar的key值变化
  TAB_BAR_CHANGE: ({ commit, dispatch, state }, { tabKey }) => {
    if(tabKey) {
      commit(Type.TAB_BAR_CHANGE, { tabKey });
      return tabKey;
    }
  },

  // 处理路由变化
  ROUTE_CHANGE: ({ commit, dispatch, state }, { route }) => {
    if (route) {
      commit(Type.ROUTE_CHANGE, { route });
      return route;
    }
  },

  FETCH_ARTICLE_LIST: ({ commit, dispatch, state }) => {
    if (!state.articleList.length) {
      return axios.get(`${host}/api/article/list`)
        .then(response => {
          let data = response.data.list;
          commit(Type.SET_ARTICLE_LIST, data);
          return data;
        })
    }
    return Promise.resolve();
  },

  FETCH_ARTICLE_DETAIL: ({ commit, dispatch, state }, { id }) => {
    if (state.article.id != id) {
      return axios.get(`${host}/api/article/${id}`)
        .then(response => {
          let data = response.data;
          commit(Type.SET_ARTICLE_DETAIL, data);
        })
    }
    return Promise.resolve();
  }
};

export default actions;



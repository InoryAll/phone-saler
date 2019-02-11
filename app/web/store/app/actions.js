/**
 * action
 * Created by tianrenjie on 2018/9/25
 */
import * as Type from './mutation-type';

const actions = {
  // 处理tabbar的key值变化
  TAB_BAR_CHANGE: ({ commit, dispatch, state }, { tabKey }) => {
    if(tabKey) {
      commit(Type.TAB_BAR_CHANGE, { tabKey });
      return tabKey;
    }
    return Promise.resolve();
  },

  // 处理路由变化
  ROUTE_CHANGE: ({ commit, dispatch, state }, { route }) => {
    if (route) {
      commit(Type.ROUTE_CHANGE, { route });
      return route;
    }
  },
};

export default actions;



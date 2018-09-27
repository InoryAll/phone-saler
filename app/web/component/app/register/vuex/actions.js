/**
 * action
 * Created by tianrenjie on 2018/9/25
 */
import * as Type from './mutation-type';
import { doRegisterAPI } from '../../api/registerApi';

const actions = {
  DO_REGISTER: ({ commit, dispatch, state }, { params }) => {
    doRegisterAPI({ ...params })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.code === 0) {
          commit(Type.DO_REGISTER, { data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return Promise.resolve();
  },
};

export default actions;

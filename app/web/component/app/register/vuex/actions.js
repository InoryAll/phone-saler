/**
 * action
 * Created by tianrenjie on 2018/9/25
 */
import { Toast } from 'mint-ui';
import * as Type from './mutation-type';
import { doRegisterAPI } from '../../api/registerApi';

const actions = {
  DO_REGISTER: ({ commit, dispatch, state }, { params }) => {
    doRegisterAPI({ ...params })
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        } else {
          Toast({ message: res.statusText });
        }
      })
      .then((data) => {
        if (data.code === 0) {
          commit(Type.DO_REGISTER, { data });
          Toast({ message: '注册成功！立即去登录' });
        } else {
          Toast({ message: data.msg });
        }
      })
      .catch((err) => {
        console.log(err);
        Toast({ message: err.message });
      });
    return Promise.resolve();
  },
};

export default actions;

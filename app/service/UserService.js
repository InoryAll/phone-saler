/**
 * UserService
 * Created by tianrenjie on 2018/8/20
 */
const _ = require('lodash');
const UserDao = require('../dao/UserDao');
const Response = require('../util/response');

class UserService {
  // 用户注册服务
  static async userRegister(ctx) {
    const user_obj = ctx.body;
    try {
      if (_.isEmpty(await UserDao.getUser(ctx, user_obj))) {
        ctx.body = await UserDao.addUser(ctx, user_obj);
      } else {
        ctx.body = Response.error({ err: { message: '用户名已存在!' } });
      }
    } catch (err) {
      ctx.body = Response.error({ err });
    }
  }
}


module.exports = UserService;
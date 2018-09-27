/**
 * UserService
 * Created by tianrenjie on 2018/8/20
 */
const _ = require('lodash');
const UserDao = require('../dao/UserDao');
const Response = require('../util/response');
const Validator = require('../util/validator');

class UserService {
  // 用户注册服务(普通接口)
  static async userRegister(ctx) {
    const user_obj = ctx.request.body;
    try {
      if (_.isEmpty(await UserDao.getUser(ctx, user_obj).data)) {
        const validate = new Validator().validate([{
          data: user_obj.username,
          rule: [{
            required: true,
            message: '用户名不能为空！',
          }, {
            type: 'tel',
            message: '用户名格式不正确！',
          }],
        }, {
          data: user_obj.password,
          rule: [{
            required: true,
            message: '密码不能为空！',
          }],
        }, {
          data: user_obj.captcha,
          rule: [{
            required: true,
            message: '验证码不能为空！',
          }],
        }]);
        if (_.isEmpty(validate.error)) {
          ctx.body = await UserDao.addUser(ctx, user_obj);
          return 0;
        }
        ctx.body = Response.error({ err: { message: validate.error } });
      } else {
        ctx.body = Response.error({ err: { message: '用户名已存在!' } });
      }
    } catch (err) {
      ctx.body = Response.error({ err });
    }
  }
}


module.exports = UserService;
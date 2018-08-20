/**
 * UserService
 * Created by tianrenjie on 2018/8/20
 */
const UserDao = require('../dao/UserDao');

class UserService {
  static async getUser(ctx) {
    const reg = ctx.query || {};
    ctx.body = await UserDao.getUser(ctx, reg);
  }
}


module.exports = UserService;
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
  static async addUser(ctx) {
    // const user_obj = ctx.body;
    const test_obj = {
      username: 'tianrenjie',
      password: '10086',
      name: 'tianrenjie',
      mobile: '15861368488',
      permission: 1,
      address: [{
        province: 111154,
        city: 111154,
        area: 111154,
        detail: '古韵北苑16幢110',
        isDefault: true,
      }],
      create: {
        _u: '5b7b678593a6405207ae9619',
        _t: 1534814017367,
      },
      update: [{
        _u: '5b7b678593a6405207ae9619',
        _t: 1534814017367,
      }],
      _d: false,
    };
    ctx.body = await UserDao.addUser(ctx, test_obj);
  }
  static async updateUser(ctx) {
    const reg = { _id: '5b7b70853e95c03c28e0f004' };
    const user_obj = {
      username: 'tianrenjie',
      password: '10086',
      name: 'tianrenjie',
      mobile: '15861368488',
      permission: 0,
      address: [{
        province: 111154,
        city: 111154,
        area: 111154,
        detail: '古韵北苑16幢110',
        isDefault: true,
      }],
      create: {
        _u: '5b7b678593a6405207ae9619',
        _t: 1534814017367,
      },
      update: [{
        _u: '5b7b678593a6405207ae9619',
        _t: 1534814017367,
      }],
      _d: false,
    };
    const options = {};
    ctx.body = await UserDao.updateUser(ctx, reg, user_obj, options);
  }
  static async deleteUser(ctx) {
    const reg = { _id: '5b7b70853e95c03c28e0f004' };
    ctx.body = await UserDao.deleteUser(ctx, reg);
  }
}


module.exports = UserService;
/**
 * UserController
 * Created by tianrenjie on 2018/8/20
 */
const Controller = require('egg').Controller;
const UserService = require('../service/UserService');

class UserController extends Controller {
  async getUser() {
    console.log('Get User', 11111111111111);
    await UserService.getUser(this.ctx);
  }
}

module.exports = UserController;

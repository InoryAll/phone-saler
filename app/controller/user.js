/**
 * UserController
 * Created by tianrenjie on 2018/8/20
 */
const Controller = require('egg').Controller;
const UserService = require('../service/UserService');

class UserController extends Controller {
  async doUserRegister() {
    await UserService.userRegister(this.ctx);
  }
}

module.exports = UserController;

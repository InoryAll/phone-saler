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
  async addUser() {
    console.log('Add User', 2222222222);
    await UserService.addUser(this.ctx);
  }
  async updateUser() {
    console.log('Update User', 33333333333);
    await UserService.updateUser(this.ctx);
  }
  async deleteUser() {
    console.log('Delete User', 4444444444444);
    await UserService.deleteUser(this.ctx);
  }
}

module.exports = UserController;

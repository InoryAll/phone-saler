/**
 * AdminController
 * Created by tianrenjie on 2018/8/21
 */
const Controller = require('egg').Controller;
const AdminService = require('../service/AdminService');

class AdminController extends Controller {
  async getAdmin() {
    console.log('Get Admin', 111111111);
    await AdminService.getAdmin(this.ctx);
  }
  async addAdmin() {
    console.log('Add Admin', 222222222);
    await AdminService.addAdmin(this.ctx);
  }
  async updateAdmin() {
    console.log('Update Admin', 33333333);
    await AdminService.updateAdmin(this.ctx);
  }
  async deleteAdmin() {
    console.log('Delete Admin', 4444444444);
    await AdminService.deleteAdmin(this.ctx);
  }
}

module.exports = AdminController;

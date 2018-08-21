/**
 * AdminService
 * Created by tianrenjie on 2018/8/21
 */
const AdminDao = require('../dao/AdminDao');

class AdminService {
  static async getAdmin(ctx) {
    const reg = ctx.query;
    ctx.body = await AdminDao.getAdmin(ctx, reg);
  }
}

module.exports = AdminService;

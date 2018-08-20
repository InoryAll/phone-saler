/**
 * AdminDao
 * Created by tianrenjie on 2018/8/20
 */
const Response = require('../util/response');

class AdminDao {
  static async getAdmin(ctx, reg) {
    const AdminModel = ctx.model.Admin;
    try {
      const queryResult = await AdminModel.find({ ...reg });
      return Response.success(queryResult);
    } catch (err) {
      return Response.error({ err });
    }
  }
  static async addAdmin(ctx, admin_obj) {
    const AdminModel = ctx.model.Admin;
    const admin = new AdminModel({
      ...admin_obj,
    });
    try {
      const queryResult = await admin.save();
      return Response.success(queryResult);
    } catch (err) {
      return Response.error({ err });
    }
  }
  static async updateAdmin(ctx, reg, admin_obj, options) {
    const AdminModel = ctx.model.Admin;
    const defaultOptions = {
      multi: false,
    };
    try {
      const queryResult = await AdminModel
        .update({ ...reg }, { ...admin_obj }, Object.assign({}, defaultOptions, options || {}));
      return Response.success(queryResult);
    } catch (err) {
      return Response.error({ err });
    }
  }
  static async deleteAdmin(ctx, reg) {
    const AdminModel = ctx.model.Admin;
    try {
      const queryResult = await AdminModel.remove({ ...reg });
      return Response.success(queryResult);
    } catch (err) {
      return Response.error({ err });
    }
  }
}

module.exports = AdminDao;

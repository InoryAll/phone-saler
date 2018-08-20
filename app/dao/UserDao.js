/**
 * UserDao
 * Created by tianrenjie on 2018/8/20
 */
const Response = require('../util/response');

class UserDao {
  static async getUser(ctx, reg) {
    const UserModel = ctx.model.User;
    try {
      const queryResult = await UserModel.find({ ...reg });
      return Response.success(queryResult);
    } catch (err) {
      return Response.error({ err });
    }
  }
  static async addUser(ctx, user_obj) {
    const UserModel = ctx.model.User;
    const user = new UserModel({
      ...user_obj,
    });
    try {
      const queryResult = await user.save();
      return Response.success(queryResult);
    } catch (err) {
      return Response.error({ err });
    }
  }
  static async updateUser(ctx, reg, user_obj, options) {
    const UserModel = ctx.model.User;
    const defaultOptions = {
      multi: false,
    };
    try {
      const queryResult = await UserModel
        .update({ ...reg }, { $set: { ...user_obj } }, Object.assign({}, defaultOptions, options || {}));
      return Response.success(queryResult);
    } catch (err) {
      return Response.error({ err });
    }
  }
  static async deleteUser(ctx, reg) {
    const UserModel = ctx.model.User;
    try {
      const queryResult = await UserModel.remove({ ...reg });
      return Response.success(queryResult);
    } catch (err) {
      return Response.error({ err });
    }
  }
}

module.exports = UserDao;

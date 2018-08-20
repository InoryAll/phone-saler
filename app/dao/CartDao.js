/**
 * CartDao
 * Created by tianrenjie on 2018/8/20
 */
const Response = require('../util/response');

class CartDao {
  static async getCart(ctx, reg) {
    const CartModel = ctx.model.Cart;
    try {
      const queryResult = await CartModel.find({ ...reg })
        .populate('User')
        .populate('Product');
      return Response.success(queryResult);
    } catch (err) {
      return Response.error({ err });
    }
  }
  // static async addCart(ctx, cart_obj, product_obj, user_obj) {
  //   const CartModel = ctx.model.Cart;
  //   try {
  //   } catch (err) {
  //
  //   }
  // }
  // static async updateCart() {
  //
  // }
  // static async deleteCart() {
  //
  // }
}

module.exports = CartDao;

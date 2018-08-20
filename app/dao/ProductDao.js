/**
 * ProductDao
 * Created by tianrenjie on 2018/8/20
 */
const Response = require('../util/response');

class ProductDao {
  static async getProduct(ctx, reg) {
    const ProductModel = ctx.model.Product;
    try {
      const queryResult = await ProductModel.find({ ...reg });
      return Response.success(queryResult);
    } catch (err) {
      return Response.error({ err });
    }
  }
  static async addProduct(ctx, product_obj) {
    const ProductModel = ctx.model.Product;
    const product = new ProductModel({
      ...product_obj,
    });
    try {
      const queryResult = product.save();
      return Response.success(queryResult);
    } catch (err) {
      return Response.error({ err });
    }
  }
  static async updateProduct(ctx, reg, product_obj, options) {
    const ProductModel = ctx.model.Product;
    const defaultOptions = {
      multi: false,
    };
    try {
      const queryResult = await ProductModel
        .update({ ...reg }, { ...product_obj }, Object.assign({}, defaultOptions, options || {}));
      return Response.success(queryResult);
    } catch (err) {
      return Response.error({ err });
    }
  }
  static async deleteProduct(ctx, reg) {
    const ProductModel = ctx.model.Product;
    try {
      const queryResult = await ProductModel.remove({ ...reg });
      return Response.success(queryResult);
    } catch (err) {
      return Response.error({ err });
    }
  }
}

module.exports = ProductDao;

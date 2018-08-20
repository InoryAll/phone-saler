/**
 * Cart Model
 * Created by tianrenjie on 2018/8/20
 */

module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const CartSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    price: Number,
    count: Number,
    color: String,
    rom: String,
    versionType: String,
    create: {
      _u: String,
      _t: Number,
    },
    update: [{
      _u: String,
      _t: Number,
    }],
    _d: Boolean,
  }, { collection: 'cart' });
  return mongoose.model('Cart', CartSchema);
};

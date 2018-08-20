/**
 * Cart Model
 * Created by tianrenjie on 2018/8/20
 */

module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const CartSchema = new Schema({
    product: [Schema.Types.ObjectId],
    user: Schema.Types.ObjectId,
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

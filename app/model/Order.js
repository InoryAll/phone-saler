/**
 * Order Model
 * Created by tianrenjie on 2018/8/20
 */

module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const OrderSchema = new Schema({
    status: Number,
    product: [Schema.Types.ObjectId],
    user: Schema.Types.ObjectId,
    price: Number,
    count: Number,
    create: {
      _u: String,
      _t: Number,
    },
    update: [{
      _u: String,
      _t: Number,
    }],
    _d: Boolean,
  }, { collection: 'order' });
  return mongoose.model('Order', OrderSchema);
};

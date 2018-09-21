/**
 * 用户实体User
 * Created by tianrenjie on 2018/8/8
 */

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    username: String,
    password: String,
    name: String,
    mobile: String,
    permission: Number,
    address: [{
      receive: String,
      phone: String,
      province: Number,
      city: Number,
      area: Number,
      detail: String,
      isDefault: Boolean,
    }],
    create: {
      _u: String,
      _t: Number,
    },
    update: [{
      _u: String,
      _t: Number,
    }],
    _d: Boolean,
  }, { collection: 'user' });
  return mongoose.model('User', UserSchema);
};

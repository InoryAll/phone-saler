/**
 * 管理员实体Admin
 * Created by tianrenjie on 2018/8/8
 */

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const AdminSchema = new Schema({
    username: String,
    password: String,
    name: String,
    mobile: String,
    isSuper: Boolean,
    create: {
      _u: String,
      _t: Number,
    },
    update: [{
      _u: String,
      _t: Number,
    }],
    _d: Boolean,
  }, { collection: 'admin' });
  return mongoose.model('Admin', AdminSchema);
};

/**
 * Config Model
 * Created by tianrenjie on 2018/8/20
 */

module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ConfigSchema = new Schema({
    type: String,
    config: [{
      label: String,
      value: String,
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
  }, { collection: 'config' });
  return mongoose.model('Config', ConfigSchema);
};

/**
 * Demand model
 * Created by tianrenjie on 2018/8/8
 */

module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const DemandSchema = new Schema({
    name: String,
    jira: Array,
    project: String,
    platform: Array,
    product: Array,
    interaction: Array,
    visual: Array,
    developers: Array,
    background: String,
    goal: String,
    effect: String,
    innovation: String,
    status: Number,
    timestamp: Array,
    reviewing: Boolean,
    proto_url: String,
    visual_url: String,
    devVersion: String,
    developer: String,
    create: {
      user: String,
      timestamp: Number,
    },
    update: {
      user: String,
      timestamp: Number,
    },
    __d: Boolean,
  }, { collection: 'demand' });
  return mongoose.model('Demand', DemandSchema);
};

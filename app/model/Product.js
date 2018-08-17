/**
 * Product Model
 * Created by tianrenjie on 2018/8/17
 */

module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ProductSchema = new Schema({
    name: String,
    type: String,
    price: [{
      settings: {
        color: String,
        rom: String,
        versionType: String,
      },
      price: Number,
    }],
    count: Number,
    preview: Array,
    settings: {
      cpu: String,
      cpuVersion: String,
      showOnTime: Number,
      mobileName: String,
      screen: Number,
      thickness: Number,
      containedChina: Boolean,
      battery: Number,
      brand: String,
      model: String,
      network: String,
      style: String,
      color: [{
        label: String,
        value: String,
      }],
      pack: String,
      backCamera: String,
      os: String,
      attachment: Array,
      isNew: String,
      afterSale: String,
      touch: String,
      ram: Array,
      rom: [{
        label: String,
        value: String,
      }],
      keyboard: String,
      resolutionRatio: String,
      mobileType: Array,
      batteryType: String,
      cameraType: String,
      videoShowType: String,
      networkType: String,
      cpuCounts: Number,
      cpuHz: Number,
      versionType: [{
        label: String,
        value: String,
      }],
    },
    service: {
      base: [{
        header: String,
        body: String,
      }],
      other: Array,
    },
    judges: String,
    des: String,
    create: {
      _u: String,
      _t: Number,
    },
    update: [{
      _u: String,
      _t: Number,
    }],
    _d: Boolean,
  });
  return mongoose.model('Product', ProductSchema);
};

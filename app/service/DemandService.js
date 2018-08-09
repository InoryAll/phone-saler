/**
 * Demand Service
 * Created by tianrenjie on 2018/8/8
 */
const DemandDao = require('../dao/DemandDao');

class DemandService {
  static async getAllDemandList(ctx, params) {
    const result = await DemandDao.getDemand(ctx);
    ctx.body = result;
  }
}

module.exports = DemandService;
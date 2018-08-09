/**
 * DemandDao
 * Created by tianrenjie on 2018/8/8
 */

class DemandDao {
  static async getDemand(ctx) {
    let result = null;
    result = await ctx.model.Demand.find();
    return result;
  }
}

module.exports = DemandDao;

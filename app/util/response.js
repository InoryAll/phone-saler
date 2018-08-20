/**
 * Response
 * Created by tianrenjie on 2018/8/20
 */

class Response {
  static success(result) {
    return {
      code: 0,
      data: result.data || [],
    };
  }
  static error(result) {
    return {
      code: 1,
      msg: result.err.message || '请求错误，请重试',
    };
  }
}

module.exports = Response;

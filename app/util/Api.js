/**
 * 请求API上层封装
 * Created by tianrenjie on 2018/9/25
 */
const axios = require('axios');

class Api {
  static createAxiosAPI(options) {
    return (data) => {
      return axios({
        method: options.method,
        url: options.url,
        data: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
    };
  }
}

module.exports = Api;

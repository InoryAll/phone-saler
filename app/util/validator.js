/**
 * Validator 简易检验器
 * Created by tianrenjie on 2018/9/21
 */
const _ = require('lodash');

/**
 * rules: [{
 *    data: '',
 *    rule: [{
 *      type: '', // 目前只支持number，email，tel校验
 *      message: '',
 *    }, {
 *      required: true,
 *      message: '',
 *    }],
 *    callback: '',
 * }]
 */
class Validator {
  constructor() {
    this.error = [];
  }
  validate(rules) {
    const _this = this;
    try {
      _.map(rules, function(item) {
        // 存在自定义函数时，直接调用自定义函数
        if (!_.isEmpty(item.callback)) {
          item.callback(item.data);
          return 0;
        }
        // 存在rule规则时，对规则进行一一检验
        if (!_.isEmpty(item.rule)) {
          _.map(item.rule, function(it) {
            // 必要性判断
            if (!_.isUndefined(it.required) && it.required === true) {
              !_.isNumber(item.data) && _.isEmpty(item.data) && _this.error.push(it.message);
            }
            // 类型判断(number, tel, email)
            if (!_.isUndefined(it.type)) {
              const tel_reg = /^(1\d{10})$/gi;
              const email_reg = /^(\w+)@(\w{2,6})\.(\w{2,4})$/gi;
              switch (it.type) {
                case 'number':
                  !_.isNumber(item.data) && _this.error.push(it.message);
                  break;
                case 'tel':
                  !tel_reg.test(item.data) && _this.error.push(it.message);
                  break;
                case 'email':
                  !email_reg.test(item.data) && _this.error.push(it.message);
                  break;
                default:
                  break;
              }
            }
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
    return _this;
  }
}

module.exports = Validator;

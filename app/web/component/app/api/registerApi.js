/**
 * 注册页面api
 */
import API from '../../../../util/Api';

// 注册接口
export const doRegisterAPI = API.createAxiosAPI({
  method: 'post',
  url: '/user/register',
});

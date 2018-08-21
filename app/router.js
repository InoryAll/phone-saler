
module.exports = app => {
  // User Dao接口测试
  app.get('/user/getUser', app.controller.user.getUser);
  app.get('/user/addUser', app.controller.user.addUser);
  app.get('/user/updateUser', app.controller.user.updateUser);
  app.get('/user/deleteUser', app.controller.user.deleteUser);

  // Admin Dao接口测试


  app.get('/api/article/list', app.controller.app.list);
  app.get('/api/article/:id', app.controller.app.detail);
  app.get('/*', app.controller.app.index);
};

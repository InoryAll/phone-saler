
module.exports = app => {
  // User接口
  app.post('/user/register', app.controller.user.doUserRegister);

  // Admin Dao接口测试
  app.get('/admin/getAdmin', app.controller.admin.getAdmin);
  app.get('/admin/addAdmin', app.controller.admin.addAdmin);
  app.get('/admin/updateAdmin', app.controller.admin.updateAdmin);
  app.get('/admin/deleteAdmin', app.controller.admin.deleteAdmin);

  app.get('/api/article/list', app.controller.app.list);
  app.get('/api/article/:id', app.controller.app.detail);
  app.get('/*', app.controller.app.index);
};

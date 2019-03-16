'use strict';

module.exports = function (app) {
  // Update or Create tables if not exists the same as models
  // app.dataSources.db.autoupdate(['AccessToken', 'ACL', 'User', 'Role', 'Brand', 'Models', 'Car'], e => e && console.log(e));

  // Drop and create tables
  app.dataSources.db['auto' + ['migrate', 'update'][1]](
    [
      'Role',
      'ACL',
      'AccessToken',
      'Users',
      'Brands',
      'Models',
      'Cars'
    ]
    , e => e && console.log(e));
};

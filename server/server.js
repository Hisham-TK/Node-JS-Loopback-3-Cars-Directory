'use strict';

const
  lb = require('loopback'),
  boot = require('loopback-boot'),

  app = module.exports = lb();

// My Middleware for prevent authorized users but not super admin from add or edit.
app.use('/api', (q, s, n) => q.query.access_token && /(?!=\\)\w+/.exec(q.url)[0] !== 'users' && q.method !== 'GET' ? app.models.AccessToken.findById(q.query.access_token, (e, t) => app.models.Users.findById(t.userId, (e, d) => d.isAdmin && d.isSuperAdmin ? n() : s.status('401').send({
  "error": {
    "statusCode": 401,
    "name": "Error",
    "message": "Authorization Required",
    "code": "AUTHORIZATION_REQUIRED",
    "stack": "Error: Authorization Required from Tarbeeta 🤗"
  }
}))) : n());

app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    // console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Web server listening & Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

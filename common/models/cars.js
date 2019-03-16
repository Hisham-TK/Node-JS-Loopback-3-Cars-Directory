'use strict';

module.exports = function (Cars) {
  // Create search by name method
  Cars.searchByName = (n, cb) =>
    Cars.find().then(d => cb(null, d.filter(v => RegExp(n, 'i').exec(v.name)))).catch(e => cb(e));

};

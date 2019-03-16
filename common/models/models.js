'use strict';

module.exports = function (Models) {
  // Ensure that every model name is unique.
  Models.validatesUniquenessOf('name');

  // Create search by name method
  Models.searchByName = (n, cb) =>
    Models.find().then(d => cb(null, d.filter(v => RegExp(n, 'i').exec(v.name)))).catch(e => cb(e));

};

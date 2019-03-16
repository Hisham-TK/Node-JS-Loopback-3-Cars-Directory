'use strict';

module.exports = function (Brands) {
  // Ensure that every brand name is unique.
  Brands.validatesUniquenessOf('name');

  // Create search by name method
  Brands.searchByName = (n, cb) =>
    Brands.find().then(d => cb(null, d.filter(v => RegExp(n, 'i').exec(v.name)))).catch(e => cb(e));
};

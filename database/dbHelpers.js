var Product = require('./schema.js');
var db = require('./index.js')

var helpers = {
  get: () => Product.find({}),
  getOne: (productId) => Product.find({productId})
}

module.exports = helpers
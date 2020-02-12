var Product = require('./schema.js');
var db = require('./index.js')

var helpers = {
  get: () => Product.find({}),
  getOne: (productId) => Product.find({ productId }),

  create: (product) => Product.insertMany(product),

  updateOne: (productId, updatedProductInfo) => Product.updateOne({productId}, updatedProductInfo),

  deleteOne: (productId) => Product.deleteOne({productId}),
  deleteAll: () => Product.deleteMany({}),

}

module.exports = helpers
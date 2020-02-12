var Product = require('./schema.js');
var db = require('./index.js')

var helpers = {
  getOne: (productId) => Product.find({ productId }),
  getAll: () => Product.find({}),

  createOne: (product) => Product.create(product),
  createMany: (products) => Product.insertMany(products),

  updateOne: (productInfo, updatedProductInfo) => Product.updateOne(productInfo, updatedProductInfo),

  deleteOne: (productInfo) => Product.deleteOne(productInfo),
  deleteAll: () => Product.deleteMany({}),

}

module.exports = helpers
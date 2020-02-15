var Product = require('./schema.js');
var db = require('./index.js')

var helpers = {
  get: () => Product.find({}),
  getOne: (productId) => Product.findOne({ productId }),
  getOnebyName: (name) => Product.findOne({ name }),
  getAllbyName: (name) => Product.find({ name }),

  create: (product) => Product.insertMany(product),

  updateOne: (productId, updatedProductInfo) => Product.updateOne({productId}, updatedProductInfo),

  deleteOne: (productId) => Product.deleteOne({productId}),
  deleteAll: () => Product.deleteMany({}),

}

module.exports = helpers
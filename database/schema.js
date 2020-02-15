var mongoose = require('mongoose');

var productSchema = mongoose.Schema ({
  productId: {type: Number, index: true},
  name: {type: String, index: true},
  brand: {type: String},
  item: {type: Number},
  color: {type: String},
  rating: {type: Number},
  price: {type: Number},
  size: {type: String},
  images: [
    {type: String}
  ],
  description: {type: String}
});

module.exports = mongoose.model('Product', productSchema)


var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost/REIproducts';


mongoose.connect(mongoURI, { useNewUrlParser: true })

module.exports = db;
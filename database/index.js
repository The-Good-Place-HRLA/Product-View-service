var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost/REIproducts';


mongoose.connect(mongoURI, { useNewUrlParser: true })
// 

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error!'));
db.once('open', () => console.log('connected!'));

module.exports = db;
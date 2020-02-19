require('newrelic')

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));
app.use(cors());
app.use(morgan('dev'));


app.use('/', router);
// remember to change path when connecting to proxy
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

module.exports = app;
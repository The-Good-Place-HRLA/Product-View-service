// require('newrelic')

const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const port = 3333;
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

app.use(expressStaticGzip(path.join(__dirname, '../client/dist'), {
    enableBrotli: true
   }));
   app.use('/:id', expressStaticGzip(path.join(__dirname, '../client/dist'), {
    enableBrotli: true
   }));
// app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`App listening on port ${port}!`));
const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const port = 3333;
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../client/src/components/App.jsx');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/pg', router);

app.get('^/$', (req, res) => {
  const jsx = React.createElement(App.default);
  const reactDom = ReactDOMServer.renderToString(jsx);
  var responseText = htmlTemplate(reactDom);
  res.send(responseText)
});

app.use(expressStaticGzip(path.join(__dirname, '../client/dist'), {
  enableBrotli: true
}));
app.use('/:id', expressStaticGzip(path.join(__dirname, '../client/dist'), {
  enableBrotli: true
}));

function htmlTemplate(reactDom) {
  return (`<!DOCTYPE html>
        <html lang="en">
        <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="/KLstyles4.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet">
</head>
<body>
  <div id="product-view">${ reactDom}</div>
  <script src="KLbundle.js"></script>
</body>
</html>`)
    ;
}

app.listen(port, () => console.log(`App listening on port ${port}!`));
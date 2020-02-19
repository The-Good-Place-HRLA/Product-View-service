require('newrelic')
const app = require('./index.js')

const port = 3333;

app.listen(port, () => console.log(`App listening on port ${port}!`));
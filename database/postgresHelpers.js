const { Pool, Client } = require('pg');

const pool  = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'reiproducts',
  user: 'brianprice'
});

const postgresHelpers = {

getById : (productId) => pool.query(`SELECT * FROM products where productId = ${productId}`)
// .then(res => console.log(res.rows[0]))
// .catch(err => console.error(err))
,

getByName : (name) => pool.query(`SELECT * FROM products where name = '${name}'`)
  // .then(res => console.log(res.rows))
  // .catch(err => console.error(err))
  ,

  getFirstByName : (name) => pool.query(`SELECT * FROM products where name = '${name}' LIMIT 1`)
  // .then(res => console.log(res.rows[0]))
  // .catch(err => console.error(err))
  ,

}

// getById(50)
// getByName('Ergonomic Cotton Chair')
// getFirstByName('Ergonomic Cotton Chair')

module.exports = postgresHelpers
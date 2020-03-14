const { Pool, Client } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'reiproducts',
  user: 'brianprice'
});

const postgresHelpers = {

  getById: (productId) => pool.query(`SELECT * FROM products where productId = ${productId}`),

  getByName: (name) => pool.query(`SELECT * FROM products where name = '${name}'`),

  getFirstByName: (name) => pool.query(`SELECT * FROM products where name = '${name}' LIMIT 1`),

}

module.exports = postgresHelpers
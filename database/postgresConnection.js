const { Pool, Client } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'reiproducts',
    user: 'brianprice'
});
var before = new Date();
pool.connect()
.then(client => 
    client.query('DROP TABLE if exists products')
    .then(res => client.query("CREATE TABLE products(productId INT NOT NULL UNIQUE,name VARCHAR (240) NOT NULL,brand VARCHAR (240) NOT NULL,item INT NOT NULL, color VARCHAR (50) NOT NULL, rating DECIMAL NOT NULL, price DECIMAL NOT NULL, size VARCHAR (5) NOT NULL,mages TEXT [],description VARCHAR (240) NOT NULL);"))
    .then(res => client.query('create unique index productId_index on products (productId)'))
    .then(res => client.query('create index name_index on products (name)'))
    .then(res => client.query("COPY products from '/Users/brianprice/Desktop/Coding/Hack_Reactor/Projects/System_Design_Capstone/product-view-service/items.csv' DELIMITER ',' CSV HEADER"))
    .then(res => {client.release()})
    .then(res => console.log('inserted 10 million results in ' + (new Date() - before)))
    .catch(err => console.error(err))
    .finally(() => pool.end())
)


/*
Seeding script to run in shell: open Postgres shell with "psql postgres" then run the below

DROP DATABASE if EXISTS REIproducts;
CREATE DATABASE REIproducts;

DROP TABLE if exists products;

CREATE TABLE products (
  productId INT NOT NULL UNIQUE,
  name VARCHAR (240) NOT NULL,
  brand VARCHAR (240) NOT NULL,
  item INT NOT NULL,
  color VARCHAR (50) NOT NULL,
  rating DECIMAL NOT NULL,
  price DECIMAL NOT NULL,
  size VARCHAR (5) NOT NULL,
  images TEXT [],
  description VARCHAR (240) NOT NULL
);

COPY products from '/Users/brianprice/Desktop/Coding/Hack_Reactor/Projects/System_Design_Capstone/product-view-service/items.csv' DELIMITER ',' CSV HEADER;

*/
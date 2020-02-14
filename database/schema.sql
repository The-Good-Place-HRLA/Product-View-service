psql postgres;

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

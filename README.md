# Product-View-service

Related Projects:
https://github.com/The-Good-Place-HRLA/QA-service,
https://github.com/The-Good-Place-HRLA/header-bar-service,
https://github.com/The-Good-Place-HRLA/Reviews,

Installing Dependencies
From within the root directory:

npm install,
npm run build (webpack),
npm run server (to start server),
npm run seed (to create 10 million records - *note line 28 comment about Postgres vs. Mongo array format)

MONGO
npm run mongoinsert (to insert 10 million records),
in Mongo shell; use database REIproducts and collection products,
then 'db.products.createIndex({"productId": 1}, {"unique": true"})',
and 'db.products.createIndex({"name": 1})',

POSTGRES
npm run postgresinsert (to insert 10 million records)

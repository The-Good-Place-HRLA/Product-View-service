# Product-View-service

Related Projects:
https://github.com/The-Good-Place-HRLA/QA-service,
https://github.com/The-Good-Place-HRLA/header-bar-service,
https://github.com/The-Good-Place-HRLA/Reviews,


*THIS PROJECT HAS BEEN DEPLOYED ON AWS EC2*
*IT ALSO EXISTS AS A DOCKER IMAGE: https://hub.docker.com/repository/docker/brprice/sdc*

TO RUN IT ON YOUR LOCAL MACHINE:

npm install,
npm run build (webpack),
npm run server (to start server),
npm run seed (to create a csv file with 10 million records - *note line 28 comment in database/seed.js about Postgres vs. Mongo array format*)

IF YOU'RE USING POSTGRESQL
npm run postgresinsert (to insert 10 million records)

IF YOU'RE USING MONGODB
npm run mongoinsert (to insert 10 million records),
in Mongo shell; use database REIproducts and collection products,
then 'db.products.createIndex({"productId": 1}, {"unique": true"})',
and 'db.products.createIndex({"name": 1})',

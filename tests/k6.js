import { check } from "k6";
import { Counter } from "k6/metrics";
import http from "k6/http";
import faker from "cdnjs.com/libraries/Faker";

var myErrorCounter = new Counter("my_error_counter");

// Mongo query for product by ID
// export default function () {
//     var randomNumber = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
//     let res = http.get(`http://localhost:3333/api/${randomNumber}`);
//     check(res, {
//         "is status 200": (r) => r.status === 200
//     });
//     if (res.status === 400) {
//         myErrorCounter.add(1)
//     }
// };

// Mongo query for first product by name

// export default function () {
//     var randomProduct = faker.commerce.productName();
//     let res = http.get(`http://localhost:3333/api/getOne/${randomProduct}`);
//     check(res, {
//         "is status 200": (r) => r.status === 200
//     });
//     if (res.status === 400) {
//         myErrorCounter.add(1)
//     }
// };


// Mongo query for all products by name

// export default function () {
//     var randomProduct = faker.commerce.productName();
//     let res = http.get(`http://localhost:3333/api/getAll/${randomProduct}`);
//     check(res, {
//         "is status 200": (r) => r.status === 200
//     });
//     if (res.status === 400) {
//         myErrorCounter.add(1)
//     }
// };

// Postgres query for product by ID

// export default function () {
//     var randomNumber = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
//     let res = http.get(`http://localhost:3333/pg/${randomNumber}`);
//     check(res, {
//         "is status 200": (r) => r.status === 200
//     });
//     if (res.status === 400) {
//         myErrorCounter.add(1)
//     }
// };

// Postgres query for first product by name

// export default function () {
//     var randomProduct = faker.commerce.productName();
//     let res = http.get(`http://localhost:3333/pg/getOne/${randomProduct}`);
//     check(res, {
//         "is status 200": (r) => r.status === 200
//     });
//     if (res.status === 400) {
//         myErrorCounter.add(1)
//     }
// };

// Postgres query for all products by name

// export default function () {
//     var randomProduct = faker.commerce.productName();
//     let res = http.get(`http://localhost:3333/pg/getAll/${randomProduct}`);
//     check(res, {
//         "is status 200": (r) => r.status === 200
//     });
//     if (res.status === 400) {
//         myErrorCounter.add(1)
//     }
// };

  // To run script from terminal:
  // k6 run -u numberofVirtualUsers -d 60s --rps RequestsPerSecond tests/k6.js
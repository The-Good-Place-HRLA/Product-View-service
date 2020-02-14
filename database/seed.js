// const mongoose = require('mongoose');
// const db = require('./index.js');
// const Product = require('./schema.js')
const faker = require('faker');
const fs = require('fs');

const writeItems = fs.createWriteStream('items.csv');
writeItems.write('productId, name, brand, item, color, rating, price, size, images, description\n', 'utf8');

var writeTenMillionItems = function (writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  var write = function () {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const productId = id;
      const name = faker.commerce.productName();
      const brand = (["Rex Specs", "Ruffwear", "Metolius", "Nite Ize", "Portland Design Works", "Cycle Dog", "Big Agnes", "Eagle Creek"][Math.floor(Math.random() * 8)]);
      const item = faker.random.number({ min: 1, max: 200000 });
      const color = faker.commerce.color();
      const rating = (Math.random() * 5).toFixed(1);
      const price = faker.commerce.price();
      const size = (["XS", "S", "M", "L", "XL"][Math.floor(Math.random() * 5)]);
      const images = [faker.image.imageUrl(),faker.image.imageUrl(),faker.image.imageUrl(),faker.image.imageUrl(),faker.image.imageUrl(),faker.image.imageUrl()];
      const description = `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.commerce.product()}`;
      const data = `${productId}, ${name}, ${brand}, ${item}, ${color}, ${rating}, ${price}, ${size}, "{${images}}", ${description}\n`
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding)
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

var before = new Date();

writeTenMillionItems(writeItems, 'utf-8', () => {
  writeItems.end();
  console.log('created 10 million results in ' + (new Date() - before))
})



// SEEDING FUNCTION USING REGULAR MONGOOSE INSERTION

// var dataGenerator = () => {
//   var before = new Date();
//   var items = []
//   for (var i = 0; i < 100000; i++) {
//     var item = new Product({
//       productId: i,
//       name: faker.commerce.productName(),
//       brand: (["Rex Specs", "Ruffwear", "Metolius", "Nite Ize", "Portland Design Works", "Cycle Dog", "Big Agnes", "Eagle Creek"][Math.floor(Math.random() * 8)]),
//       item: faker.random.number({ min: 1, max: 200000 }),
//       color: faker.commerce.color(),
//       rating: (Math.random() * 5).toFixed(1),
//       price: faker.commerce.price(),
//       size: (["XS", "S", "M", "L", "XL"][Math.floor(Math.random() * 5)]),
//       images: [faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl()],
//       description: `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.commerce.product()}`,
//     });
//     items.push(item);
//   }
//   Product.insertMany(items)
//   .then(() => console.log('inserted ' + i + ' results in ' + (new Date() - before)))
//   .catch(err => console.error(err))
// }
// dataGenerator();

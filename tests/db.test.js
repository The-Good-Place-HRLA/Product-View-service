const mongoose = require('mongoose');
const Product = require('../database/schema.js');
const helpers = require('../database/dbHelpers.js');

beforeAll(async () => {
    const dbURI = 'mongodb://localhost/REItest';
    await mongoose.connect(dbURI, {useNewUrlParser: true})
});

// beforeEach(async () => {
//     await Product.create({
//         // fake product data to add as need
//     })
// });

afterEach(async () => {
    await Product.deleteMany({});
})

afterAll(async (done) => {
    await mongoose.connection.collections.products.deleteMany({});
    done();
})

describe('mongoose database helpers', () => {
    it('gets one trip in the database', async (done) => {
      
        done();
    })


})
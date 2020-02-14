const mongoose = require('mongoose');
const faker = require('faker');
const helpers = require('../database/dbHelpers.js');

beforeAll(async () => {
    const dbURI = 'mongodb://localhost/REIproducts';
    await mongoose.connect(dbURI, { useNewUrlParser: true })
});

afterAll(async (done) => {
    await mongoose.connection.close();
    done();
})

describe('mongoose search query speed', () => {
    it('can find an item from the end of database in under 50ms ', async (done) => {
        const before = new Date();
        const response = await helpers.getOne(9999999);
        expect(response.productId).toBe(9999999)
        expect(new Date() - before).toBeLessThanOrEqual(50)
        done();
    });
})
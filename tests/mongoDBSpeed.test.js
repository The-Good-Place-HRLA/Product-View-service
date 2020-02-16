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
    it('can find an item by productId from the end of database in under 50ms ', async (done) => {
        const randomNumber = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
        const before = new Date();
        const response = await helpers.getOne(randomNumber);
        expect(response.productId).toBe(randomNumber)
        expect(new Date() - before).toBeLessThanOrEqual(50)
        done();
    });

    it('can find the first occurrence of an item by a given name in under 50ms ', async (done) => {
        const randomProduct = faker.commerce.productName();
        const before = new Date();
        const response = await helpers.getOnebyName(randomProduct);
        expect(response.name).toBe(randomProduct)
        expect(new Date() - before).toBeLessThanOrEqual(50)
        done();
    });

    it('can find all items by a given name in under 50ms ', async (done) => {
        const newRandomProduct = faker.commerce.productName();
        const before = new Date();
        const response = await helpers.getAllbyName(newRandomProduct);
        expect(response[0].name).toBe(newRandomProduct)
        expect(new Date() - before).toBeLessThanOrEqual(50)
        done();
    });
})
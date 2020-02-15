const mongoose = require('mongoose');
const faker = require('faker');
const helpers = require('../database/dbHelpers.js');

beforeAll(async () => {
    const dbURI = 'mongodb://localhost/REIproducts';
    await mongoose.connect(dbURI, { useNewUrlParser: true })
});

beforeEach(async () => {
    await helpers.updateOne(9500123, { "name": "TestItem" })
});

afterEach(async () => {
    await helpers.updateOne(9500123, { "name": "TestComplete" })
})

afterAll(async (done) => {
    await mongoose.connection.close();
    done();
})

describe('mongoose search query speed', () => {
    it('can find an item by productId from the end of database in under 50ms ', async (done) => {
        const before = new Date();
        const response = await helpers.getOne(9999999);
        expect(response.productId).toBe(9999999)
        expect(new Date() - before).toBeLessThanOrEqual(50)
        done();
    });

    it('can find a unique item by a given name in under 50ms ', async (done) => {
        const before = new Date();
        const response = await helpers.getOnebyName("TestItem");
        expect(response.name).toBe("TestItem")
        expect(new Date() - before).toBeLessThanOrEqual(50)
        done();
    });

    it('can find all items by a given name in under 50ms ', async (done) => {
        const before = new Date();
        const response = await helpers.getAllbyName("Refined Plastic Sausages");
        expect(response[0].name).toBe("Refined Plastic Sausages")
        expect(new Date() - before).toBeLessThanOrEqual(50)
        done();
    });
})
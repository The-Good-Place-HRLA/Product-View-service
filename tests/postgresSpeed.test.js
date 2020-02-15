const { Pool, Client } = require('pg');
const postgresHelpers = require('../database/postgresHelpers.js')
const faker = require('faker');

describe('postgres search query speed', () => {
    it('can find an item by productId from the end of the database in under 50ms', async (done) => {
        const randomNumber = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
        const before = new Date();
        const response = await postgresHelpers.getById(randomNumber);
        expect(response.rows[0].productid).toBe(randomNumber);
        expect(new Date() - before).toBeLessThanOrEqual(50)
        done();
    });

    it('can find the first item by product name from the database in under 50ms', async (done) => {
        const randomProduct = faker.commerce.productName();
        const before = new Date();
        const response = await postgresHelpers.getFirstByName(randomProduct);
        expect(response.rows[0].name).toBe(randomProduct);
        expect(new Date() - before).toBeLessThanOrEqual(50)
        done();

    });

    it('can find all items by a given product name in under 50 ms', async (done) => {
        const newRandomProduct = faker.commerce.productName();
        const before = new Date();
        const response = await postgresHelpers.getByName(newRandomProduct);
        expect(response.rows[0].name).toBe(newRandomProduct);
        expect(response.rows.length).toBeGreaterThan(1);
        expect(new Date() - before).toBeLessThanOrEqual(50);
        done();

    })

})



const supertest = require('supertest');
const app = require('../server/index.js');
const faker = require('faker');

const request = supertest(app);

describe('server with mongo', () => {
    it('responds to a request for one item by productId', async (done) => {
        const randomNumber = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
        const before = new Date();
        const response = await request.get(`/api/${randomNumber}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.productId).toBe(randomNumber)
        console.log('TOTAL REQUEST TIME FOR MONGO TEST 1 WAS ' + (new Date() - before))
        done();
    });

    it('responds to a request for the first occurrence of an item', async (done) => {
        const randomProduct = faker.commerce.productName();
        const before = new Date();
        const response = await request.get(`/api/getOne/${randomProduct}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(randomProduct)
        console.log('TOTAL REQUEST TIME FOR MONGO TEST 2 WAS ' + (new Date() - before))
        done();
    });

    it('responds to a request for all occurrences of an item', async (done) => {
        const newRandomProduct = faker.commerce.productName();
        const before = new Date();
        const response = await request.get(`/api/getAll/${newRandomProduct}`);
        expect(response.statusCode).toBe(200);
        expect(response.body[0].name).toBe(newRandomProduct)
        console.log('TOTAL REQUEST TIME FOR MONGO TEST 3 WAS ' + (new Date() - before))
        done();
    });
})

describe('server with postgres', () => {
    it('responds to a request for one item by productId', async (done) => {
        const randomNumber = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
        const before = new Date();
        const response = await request.get(`/pg/${randomNumber}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.productid).toBe(randomNumber)
        console.log('TOTAL REQUEST TIME FOR POSTGRES TEST 1 WAS ' + (new Date() - before))
        done();
    });

    it('responds to a request for the first occurrence of an item', async (done) => {
        const randomProduct = faker.commerce.productName();
        const before = new Date();
        const response = await request.get(`/pg/getOne/${randomProduct}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(randomProduct)
        console.log('TOTAL REQUEST TIME FOR POSTGRES TEST 2 WAS ' + (new Date() - before))
        done();
    });

    it('responds to a request for all occurrences of an item', async (done) => {
        const newRandomProduct = faker.commerce.productName();
        const before = new Date();
        const response = await request.get(`/pg/getAll/${newRandomProduct}`);
        expect(response.statusCode).toBe(200);
        expect(response.body[0].name).toBe(newRandomProduct)
        console.log('TOTAL REQUEST TIME FOR POSTGRES TEST 3 WAS ' + (new Date() - before))
        done();
    });

})
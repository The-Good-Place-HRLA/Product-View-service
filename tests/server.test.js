const supertest = require('supertest');
const app = require('../server/index.js');

const request = supertest(app);

describe('server api', () => {
    it('responds to a request for all items', async (done) => {
        const response = await request.get('/api');
        expect(response.statusCode).toBe(200);
        done();
    })

    it('gets responds to a request for one item', async (done) => {
        const response = await request.get('/api/4');
        expect(response.statusCode).toBe(200);
        done();
    })
})
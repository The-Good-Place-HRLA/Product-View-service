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

    it('gets responds to a request to create items', async (done) => {
        const response = await request.post('/api');
        expect(response.statusCode).toBe(201);
        done();
    })

    it('gets responds to a request to update an item', async (done) => {
        const response = await request.put('/api/4');
        expect(response.statusCode).toBe(202);
        done();
    })

    it('gets responds to a request to delete one item', async (done) => {
        const response = await request.delete('/api/4');
        expect(response.statusCode).toBe(203);
        done();
    })

    it('gets responds to a request to delete all items', async (done) => {
        const response = await request.delete('/api');
        expect(response.statusCode).toBe(203);
        done();
    })

    it('gets responds to a request for one item', async (done) => {
        const response = await request.get('/api/4');
        expect(response.statusCode).toBe(200);
        done();
    })
})
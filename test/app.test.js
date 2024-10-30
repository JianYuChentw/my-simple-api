// test/app.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /api/message', () => {
    it('should return a JSON object with a message', async () => {
        const res = await request(app).get('/api/message');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Hello, Jenkins CI/CD!');
    });
});

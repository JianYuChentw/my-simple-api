// test/app.test.js
const request = require('supertest');
const app = require('../app');

let server;

beforeAll(() => {
    server = app.listen(3000, () => console.log("Test server running"));
});

afterAll(done => {
    server.close(done);  // 確保測試結束後伺服器關閉
});

describe('GET /api/message', () => {
    it('should return a JSON object with a message', async () => {
        const res = await request(app).get('/api/message');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Hello,我來更新你了！ Jenkins CI/CD!');
    });
});

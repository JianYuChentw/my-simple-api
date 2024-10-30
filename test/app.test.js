// test/app.test.js
const request = require('supertest');
const app = require('../app');

let server;
let port;

beforeAll(done => {
    server = app.listen(0, () => {  // 使用 0 讓系統自動選擇端口
        port = server.address().port;  // 獲取隨機分配的端口
        console.log(`Test server running on port ${port}`);
        done();
    });
});

afterAll(done => {
    server.close(done);  // 確保測試結束後伺服器關閉
});

describe('GET /api/message', () => {
    it('should return a JSON object with a message', async () => {
        const res = await request(app).get('/api/message');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Hello,我來更新你了！第二次！！！ Jenkins CI/CD!');
    });
});

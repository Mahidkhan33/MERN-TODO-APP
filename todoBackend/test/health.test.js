const request = require('supertest');
const app = require('../server.js');

describe('Health Check API', () => {
  it('should return health status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
    expect(response.body.message).toBe('Server is running');
  });
});
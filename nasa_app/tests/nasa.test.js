const request = require('supertest');
const express = require('express');
const nasaRoutes = require('../src/routes/nasa.routes');

const app = express();
app.use(express.json());
app.use('/api/nasa', nasaRoutes);

describe('GET /api/nasa/apod', () => {
  it('should return APOD data', async () => {
    const res = await request(app).get('/api/nasa/apod');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('url');
  });

  it('should return 400 on invalid date', async () => {
    const res = await request(app).get('/api/nasa/apod?date=invalid-date');
    expect(res.statusCode).toBe(400);
  });
});

import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../index.js';

describe('Products API Integration Tests', () => {
  it('should create a product', async () => {
    const response = await request(app)
      .post('/products')
      .send({
        name: 'Organic Apple',
        basePrice: 5.5,
        imageURL: 'https://example.com/apple.jpg',
        TTL: 14,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Organic Apple');
    expect(response.body.basePrice).toBe(5.5);
    expect(response.body.TTL).toBe(14);
  });

  it('should retrieve list of products', async () => {
    await request(app)
      .post('/products')
      .send({
        name: 'Fresh Potato',
        basePrice: 2.0,
        imageURL: 'https://example.com/potato.jpg',
        TTL: 30,
      });

    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].name).toBe('Fresh Potato');
  });

  it('should retrieve a product by ID', async () => {
    const created = await request(app)
      .post('/products')
      .send({
        name: 'Banana',
        basePrice: 3.2,
        imageURL: 'https://example.com/banana.jpg',
        TTL: 7,
      });

    const productId = created.body.id;
    const response = await request(app).get(`/products/${productId}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(productId);
    expect(response.body.name).toBe('Banana');
  });
});

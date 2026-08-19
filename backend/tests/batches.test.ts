import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../index.js';

describe('Batches API Integration Tests', () => {
  it('should create and retrieve product batches', async () => {
    // Create product first
    const prodRes = await request(app)
      .post('/products')
      .send({
        name: 'Carrot',
        basePrice: 4.0,
        imageURL: 'https://example.com/carrot.jpg',
        TTL: 20,
      });

    const productId = prodRes.body.id;
    const addedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 60 * 1000).toISOString(); // 10 hours from now

    // Create batch
    const batchRes = await request(app)
      .post('/batches')
      .send({
        productId,
        addedAt,
        expiresAt,
        quantity: 50,
      });

    expect(batchRes.status).toBe(201);
    expect(batchRes.body).toHaveProperty('id');
    expect(batchRes.body.quantity).toBe(50);

    // Get batches
    const getRes = await request(app).get('/batches');
    expect(getRes.status).toBe(200);
    expect(getRes.body.length).toBe(1);

    // Get deals
    const dealsRes = await request(app).get('/batches/deals');
    expect(dealsRes.status).toBe(200);
    expect(dealsRes.body.length).toBe(1);
    expect(dealsRes.body[0].productName).toBe('Carrot');
    expect(dealsRes.body[0].discountedPrice).toBe(0.5); // <12h gives 0.5 discount
  });

  it('should update and delete batch', async () => {
    const prodRes = await request(app)
      .post('/products')
      .send({
        name: 'Lettuce',
        basePrice: 3.0,
        imageURL: 'https://example.com/lettuce.jpg',
        TTL: 5,
      });

    const batchRes = await request(app)
      .post('/batches')
      .send({
        productId: prodRes.body.id,
        addedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 86400000).toISOString(),
        quantity: 20,
      });

    const batchId = batchRes.body.id;

    // Update quantity
    const patchRes = await request(app)
      .patch(`/batches/${batchId}`)
      .send({ quantity: 15 });

    expect(patchRes.status).toBe(200);
    expect(patchRes.body.quantity).toBe(15);

    // Delete batch
    const deleteRes = await request(app).delete(`/batches/${batchId}`);
    expect(deleteRes.status).toBe(200);

    // Verify deletion
    const getBatch = await request(app).get(`/batches/${batchId}`);
    expect(getBatch.body).toBeNull();
  });
});

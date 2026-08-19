import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../index.js';

describe('Orders & OrderItems API Integration Tests', () => {
  it('should create order and order items, then fetch them', async () => {
    // Create user
    const userRes = await request(app)
      .post('/users')
      .send({ username: 'order_user', password: 'pass', role: 'CUSTOMER' });

    const userId = userRes.body.id;

    // Create order
    const orderRes = await request(app)
      .post('/orders')
      .send({
        userId,
        total: 25.5,
      });

    expect(orderRes.status).toBe(201);
    expect(orderRes.body).toHaveProperty('id');
    expect(orderRes.body.total).toBe(25.5);

    const orderId = orderRes.body.id;

    // Fetch user orders
    const getOrdersRes = await request(app).get(`/orders/${userId}`);
    expect(getOrdersRes.status).toBe(200);
    expect(getOrdersRes.body.length).toBe(1);
    expect(getOrdersRes.body[0].id).toBe(orderId);

    // Create order item
    const orderItemRes = await request(app)
      .post('/orderItems')
      .send({
        orderId,
        price: 12.75,
        productName: 'Organic Strawberries',
        imageURL: 'https://example.com/strawberries.jpg',
        quantity: 2,
      });

    expect(orderItemRes.status).toBe(201);
    expect(orderItemRes.body.orderId).toBe(orderId);

    // Fetch order items by orderId
    const getItemsRes = await request(app).get(`/orderItems/${orderId}`);
    expect(getItemsRes.status).toBe(200);
    expect(getItemsRes.body.length).toBe(1);
    expect(getItemsRes.body[0].productName).toBe('Organic Strawberries');
  });
});

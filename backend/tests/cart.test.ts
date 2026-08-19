import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../index.js';

describe('Cart Items API Integration Tests', () => {
  it('should add item to cart and retrieve it by user ID', async () => {
    // Create user
    const userRes = await request(app)
      .post('/users')
      .send({ username: 'cart_user', password: 'pass', role: 'CUSTOMER' });

    const userId = userRes.body.id;

    // Add item to cart
    const cartRes = await request(app)
      .post('/cartItems')
      .send({
        userId,
        batchId: null,
        quantity: 3,
        appliedPrice: 10.0,
        discountedPrice: 0.8,
        productName: 'Tomatoes',
        imageURL: 'https://example.com/tomatoes.jpg',
      });

    expect(cartRes.status).toBe(200);
    expect(cartRes.body).toHaveProperty('id');
    expect(cartRes.body.productName).toBe('Tomatoes');

    const cartItemId = cartRes.body.id;

    // Get cart items by user ID
    const userCart = await request(app).get(`/cartItems/users/${userId}`);
    expect(userCart.status).toBe(200);
    expect(Array.isArray(userCart.body)).toBe(true);
    expect(userCart.body.length).toBe(1);
    expect(userCart.body[0].id).toBe(cartItemId);
  });

  it('should update and delete cart item', async () => {
    const userRes = await request(app)
      .post('/users')
      .send({ username: 'cart_user_2', password: 'pass', role: 'CUSTOMER' });

    const cartRes = await request(app)
      .post('/cartItems')
      .send({
        userId: userRes.body.id,
        quantity: 1,
        appliedPrice: 5.0,
        discountedPrice: 1.0,
        productName: 'Cucumber',
        imageURL: 'https://example.com/cucumber.jpg',
      });

    const cartItemId = cartRes.body.id;

    // Update quantity
    const patchRes = await request(app)
      .patch(`/cartItems/${cartItemId}`)
      .send({ quantity: 5 });

    expect(patchRes.status).toBe(200);
    expect(patchRes.body.quantity).toBe(5);

    // Delete item
    const delRes = await request(app).delete(`/cartItems/${cartItemId}`);
    expect(delRes.status).toBe(200);

    // Check empty user cart
    const userCart = await request(app).get(`/cartItems/users/${userRes.body.id}`);
    expect(userCart.body.length).toBe(0);
  });
});

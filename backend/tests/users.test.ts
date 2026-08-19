import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../index.js';

describe('Users API Integration Tests', () => {
  it('should register a new user successfully', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        username: 'testuser',
        password: 'password123',
        role: 'CUSTOMER',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.username).toBe('testuser');
    expect(response.body.role).toBe('CUSTOMER');
  });

  it('should login an existing user with correct credentials', async () => {
    // Register user first
    await request(app)
      .post('/users')
      .send({
        username: 'john_doe',
        password: 'securepassword',
        role: 'MANAGER',
      });

    // Attempt login
    const loginRes = await request(app)
      .post('/users/login')
      .send({
        username: 'john_doe',
        password: 'securepassword',
      });

    expect(loginRes.status).toBe(200);
    expect(loginRes.body).toHaveProperty('id');
    expect(loginRes.body.username).toBe('john_doe');
    expect(loginRes.body.role).toBe('MANAGER');
  });

  it('should return null or fail login with incorrect password', async () => {
    await request(app)
      .post('/users')
      .send({
        username: 'alice',
        password: 'correctpassword',
        role: 'CUSTOMER',
      });

    const loginRes = await request(app)
      .post('/users/login')
      .send({
        username: 'alice',
        password: 'wrongpassword',
      });

    expect(loginRes.status).toBe(200);
    expect(loginRes.body).toBeNull();
  });
});

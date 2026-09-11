import { beforeEach } from 'vitest';
import { execSync } from 'child_process';

process.env.NODE_ENV = 'test';
process.env.DATABASE_URL = 'file:./db/test.db';

// Ensure test database is initialized
execSync('npx prisma db push --accept-data-loss', {
  env: {
    ...process.env,
    DATABASE_URL: 'file:./db/test.db',
    PRISMA_USER_CONSENT_FOR_DANGEROUS_AI_ACTION: 'yes',
  },
  stdio: 'ignore',
});

import { prisma } from './index.js';

beforeEach(async () => {
  // Clear tables in reverse dependency order
  await prisma.cartItem.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.batch.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();
});

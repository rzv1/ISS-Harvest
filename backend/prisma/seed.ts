import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL || 'file:./dev.db' });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding SQLite database dev.db...');

  // Clear existing data
  await prisma.cartItem.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.batch.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  // Create Users
  const john = await prisma.user.create({
    data: {
      username: 'john',
      password: 'pog',
      role: 'MANAGER',
    },
  });

  const alex = await prisma.user.create({
    data: {
      username: 'alex',
      password: 'pog',
      role: 'CUSTOMER',
    },
  });

  const maria = await prisma.user.create({
    data: {
      username: 'maria',
      password: 'pog',
      role: 'CUSTOMER',
    },
  });

  console.log(`Created users: ${john.username} (MANAGER), ${alex.username} (CUSTOMER), ${maria.username} (CUSTOMER)`);

  // Create Products
  const potatoes = await prisma.product.create({
    data: {
      name: 'Cartofi Bio',
      basePrice: 12.5,
      TTL: 30,
      imageURL: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80',
    },
  });

  const tomatoes = await prisma.product.create({
    data: {
      name: 'Roșii Căruță',
      basePrice: 15.0,
      TTL: 10,
      imageURL: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80',
    },
  });

  const carrots = await prisma.product.create({
    data: {
      name: 'Morcovi Proaspeți',
      basePrice: 8.5,
      TTL: 20,
      imageURL: 'https://images.unsplash.com/photo-1598170845058-12ef4a457939?auto=format&fit=crop&w=400&q=80',
    },
  });

  const apples = await prisma.product.create({
    data: {
      name: 'Mere Roșii',
      basePrice: 9.0,
      TTL: 15,
      imageURL: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80',
    },
  });

  const bananas = await prisma.product.create({
    data: {
      name: 'Banane Bio',
      basePrice: 11.0,
      TTL: 7,
      imageURL: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80',
    },
  });

  const milk = await prisma.product.create({
    data: {
      name: 'Lapte Proaspăt 3.5%',
      basePrice: 7.5,
      TTL: 5,
      imageURL: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80',
    },
  });

  console.log('Created 6 products.');

  // Create Batches
  const now = new Date();

  // Batch 1: Potatoes (expires in 25 days)
  await prisma.batch.create({
    data: {
      productId: potatoes.id,
      addedAt: new Date(now.getTime() - 2 * 86400000),
      expiresAt: new Date(now.getTime() + 25 * 86400000),
      quantity: 100,
    },
  });

  // Batch 2: Tomatoes (Expires in 8 hours -> 50% deal!)
  const tomatoBatch = await prisma.batch.create({
    data: {
      productId: tomatoes.id,
      addedAt: new Date(now.getTime() - 5 * 86400000),
      expiresAt: new Date(now.getTime() + 8 * 3600000),
      quantity: 45,
    },
  });

  // Batch 3: Carrots (Expires in 20 hours -> 35% deal!)
  await prisma.batch.create({
    data: {
      productId: carrots.id,
      addedAt: new Date(now.getTime() - 4 * 86400000),
      expiresAt: new Date(now.getTime() + 20 * 3600000),
      quantity: 60,
    },
  });

  // Batch 4: Apples (expires in 12 days)
  await prisma.batch.create({
    data: {
      productId: apples.id,
      addedAt: new Date(now.getTime() - 1 * 86400000),
      expiresAt: new Date(now.getTime() + 12 * 86400000),
      quantity: 80,
    },
  });

  // Batch 5: Bananas (Expires in 30 hours -> 20% deal!)
  await prisma.batch.create({
    data: {
      productId: bananas.id,
      addedAt: new Date(now.getTime() - 3 * 86400000),
      expiresAt: new Date(now.getTime() + 30 * 3600000),
      quantity: 35,
    },
  });

  // Batch 6: Milk (expires in 4 days)
  await prisma.batch.create({
    data: {
      productId: milk.id,
      addedAt: new Date(now.getTime() - 1 * 86400000),
      expiresAt: new Date(now.getTime() + 4 * 86400000),
      quantity: 25,
    },
  });

  console.log('Created 6 batches with active discounts/deals.');

  // Create Cart Items for customer 'alex'
  await prisma.cartItem.create({
    data: {
      userId: alex.id,
      batchId: tomatoBatch.id,
      quantity: 2,
      productName: 'Roșii Căruță',
      appliedPrice: 15.0,
      discountedPrice: 0.5,
      imageURL: tomatoes.imageURL!,
    },
  });

  await prisma.cartItem.create({
    data: {
      userId: alex.id,
      batchId: null,
      quantity: 3,
      productName: 'Cartofi Bio',
      appliedPrice: 12.5,
      discountedPrice: 1.0,
      imageURL: potatoes.imageURL!,
    },
  });

  // Create an initial order for 'alex'
  const pastOrder = await prisma.order.create({
    data: {
      userId: alex.id,
      total: 44.0,
      timestamp: new Date(now.getTime() - 3 * 86400000),
    },
  });

  await prisma.orderItem.create({
    data: {
      orderId: pastOrder.id,
      productName: 'Morcovi Proaspeți',
      imageURL: carrots.imageURL!,
      quantity: 2,
      price: 8.5,
    },
  });

  await prisma.orderItem.create({
    data: {
      orderId: pastOrder.id,
      productName: 'Mere Roșii',
      imageURL: apples.imageURL!,
      quantity: 3,
      price: 9.0,
    },
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { Router } from 'express';
import { prisma } from '../../db/db.js';

const router = Router();

router.post('/', async (req, res) => {
    const { batchId, appliedPrice, discountedPrice, productName, imageURL, quantity, userId } = req.body;
    try {
        const cartItem = await prisma.cartItem.create({
            data: {
                batchId: batchId ? Number(batchId) : null,
                quantity: quantity,
                userId: Number(userId),
                appliedPrice: Number(appliedPrice),
                discountedPrice: Number(discountedPrice),
                productName: productName,
                imageURL: imageURL
            }
        });
        res.json(cartItem);
    } catch (err: any) {
        res.json({ err: err.message });
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const cartItems = await prisma.cartItem.findMany({
            where: {
                userId: Number(req.params.id)
            }
        });
        res.json(cartItems);
    } catch (err: any) {
        res.status(500).json("error" + err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cartItems = await prisma.cartItem.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.json(cartItems);
    } catch (err: any) {
        res.status(500).json("error" + err);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const cartItem = await prisma.cartItem.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                quantity: Number(req.body.quantity)
            }
        });
        res.json(cartItem);
    } catch (err: any) {
        res.json({ err: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const cartItem = await prisma.cartItem.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.json(cartItem);
    } catch (err: any) {
        res.json({ err: err.message });
    }
});

export default router;

import { Router } from 'express';
import { prisma } from '../../db/db.js';

const router = Router();

router.post('/', async (req, res) => {
    const { total, userId } = req.body;
    try {
        const newOrder = await prisma.order.create({
            data: {
                userId: userId,
                total: Number(total)
            }
        });
        res.status(201).json(newOrder);
    } catch (err: any) {
        res.json({ err: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const orders = await prisma.order.findMany({
            where: {
                userId: Number(req.params.id)
            },
            orderBy: {
                timestamp: 'desc'
            }
        });
        res.json(orders);
    } catch (err: any) {
        res.status(500).json("error" + err);
    }
});

export default router;

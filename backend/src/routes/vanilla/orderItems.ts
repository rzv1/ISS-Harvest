import { Router } from 'express';
import { prisma } from '../../db/db.js';

const router = Router();

router.post('/', async (req, res) => {
    const { orderId, price, productName, imageURL, quantity } = req.body;
    try {
        const newOrderItem = await prisma.orderItem.create({
            data: {
                orderId: orderId,
                price: price,
                imageURL: imageURL,
                quantity: quantity,
                productName: productName
            }
        });
        res.status(201).json(newOrderItem);
    } catch (err: any) {
        res.json({ err: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const orderItems = await prisma.orderItem.findMany({
            where: {
                orderId: Number(req.params.id)
            }
        });
        res.json(orderItems);
    } catch (err: any) {
        res.status(500).json("error" + err);
    }
});

export default router;

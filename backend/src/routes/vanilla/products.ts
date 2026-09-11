import { Router } from 'express';
import { prisma } from '../../db/db.js';

const router = Router();

router.post('/', async (req, res) => {
    const { name, basePrice, imageURL, TTL } = req.body;

    try {
        const newProduct = await prisma.product.create({
            data: {
                name,
                basePrice: parseFloat(basePrice),
                TTL: parseInt(TTL),
                imageURL: imageURL || ""
            }
        });
        res.status(201).json(newProduct);
    } catch (err: any) {
        res.status(400).json({ err: err.message });
    }
});

router.get('/', async (_req, res) => {
    try {
        const prod = await prisma.product.findMany();
        res.json(prod);
    } catch (err: any) {
        res.status(400).json({ err: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.json(product);
    } catch (err: any) {
        res.json({ err: err.message });
    }
});

export default router;

import { Router } from 'express';
import { prisma } from '../../db/db.js';

const router = Router();

router.post('/', async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const newUser = await prisma.user.create({
            data: {
                username,
                password,
                role
            }
        });

        res.status(201).json(newUser);
    } catch (err: any) {
        res.status(400).json({ err: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findFirst({
            where: {
                username: username,
                password: password
            }
        });
        res.status(200).json(user);
    } catch (err: any) {
        res.status(400).json({ err: err.message + process.env.DATABASE_URL });
    }
});

export default router;

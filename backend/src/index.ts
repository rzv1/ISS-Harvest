import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import * as process from 'node:process';
import { prisma } from './db/db.ts';
import { RegisterRoutes } from './routes/generated/routes.ts';
import swaggerDocument from './routes/generated/swagger.json';
import * as swaggerUi from 'swagger-ui-express';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

RegisterRoutes(app);

export { app, prisma };

if (process.env.NODE_ENV !== 'test') {
    const PORT = Number(process.env.PORT || 3000);
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT}`);
    });
}
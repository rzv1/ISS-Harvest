import { prisma } from '../../db/db.js';
import { type DealDTO } from '../../../../frontend/src/models/DealDTO.js';
import { Controller, Route, Post, Get, Body, Path, Patch, SuccessResponse, Delete, Tags } from 'tsoa';


@Route('batches')
@Tags('batches')
export class BatchController extends Controller {
    @Get()
    public async getAllBatches() {
        return await prisma.batch.findMany();
    }

    @Get('/deals')
    public async getAllDeals(): Promise<DealDTO[]> {
        const now = new Date();
        const batches = await prisma.batch.findMany({
            where: {
                expiresAt: {
                    gt: now
                }
            },
            include: {
                product: true
            }
        });
        const groupedByProduct: Record<string, typeof batches> = {};

        batches.forEach(batch => {
            const productName = batch.product.name;
            if (!groupedByProduct[productName]) {
                groupedByProduct[productName] = [];
            }
            groupedByProduct[productName].push(batch);
        });

        const finalDeals: DealDTO[] = Object.values(groupedByProduct).map(batches => {
            const sorted = batches.sort((a, b) => {
                return a.expiresAt.getTime() - b.expiresAt.getTime();
            });
            const closestBatch = sorted[0];
            let discountedPrice = 0;
            const diffInMs = closestBatch.expiresAt.getTime() - new Date().getTime();
            const numberOfHours = diffInMs / (1000 * 60 * 60);
            if (numberOfHours < 12)
                discountedPrice = 0.5;
            else if (numberOfHours < 24)
                discountedPrice = 0.65;
            else if (numberOfHours < 36)
                discountedPrice = 0.8;
            else
                discountedPrice = 0.9;

            return {
                batchId: closestBatch.id,
                imageURL: closestBatch.product.imageURL,
                productName: closestBatch.product.name,
                originalPrice: Number(closestBatch.product.basePrice),
                discountedPrice: discountedPrice,
                quantityAvailable: closestBatch.quantity,
                closestExpiry: closestBatch.expiresAt
            };
        });
        return finalDeals;
    }

    @Get('/:id')
    public async getBatchById(@Path() id: number) {
        return await prisma.batch.findUnique({
            where: {
                id: Number(id)
            }
        });
    }

    @Get('/product/:id')
    public async getBatchesByProductId(@Path() id: number) {
        return await prisma.batch.findMany({
            where: {
                productId: Number(id)
            }
        });
    }

    @Post()
    @SuccessResponse(201, "Created")
    public async createBatch(@Body() requestBody: any) {
        return await prisma.batch.create({
            data: {
                addedAt: new Date(requestBody.addedAt),
                expiresAt: new Date(requestBody.expiresAt),
                quantity: Number(requestBody.quantity),
                product: {
                    connect: { id: Number(requestBody.productId) }
                }
            }
        });
    }

    @Patch('/:id')
    public async updateBatch(@Path() id: number, @Body() requestBody: any) {
        return await prisma.batch.update({
            where: {
                id: Number(id)
            },
            data: {
                quantity: Number(requestBody.quantity)
            }
        });
    }

    @Delete('/:id')
    public async deleteBatch(@Path() id: number) {
        return await prisma.batch.delete({
            where: {
                id: Number(id)
            }
        });
    }
}
import { prisma } from '../../db/db.js';
import { Controller, Route, Post, Get, Patch, Delete, Path, Body, Tags, SuccessResponse } from "tsoa";

@Route('orders')
@Tags('orders')
export class OrderController extends Controller {
    @Get()
    public async getAllOrders() {
        return await prisma.order.findMany();
    }

    @Get('/users/:id')
    public async getOrdersByUserId(@Path() id: number) {
        return await prisma.order.findMany({
            where: {
                userId: Number(id)
            },
            orderBy: {
                timestamp: 'desc'
            }
        });
    }

    @Get('/:id')
    public async getOrderById(@Path() id: number) {
        return await prisma.order.findUnique({
            where: {
                id: Number(id)
            }
        });
    }

    @Post()
    @SuccessResponse(201, "Order created successfully")
    public async createOrder(@Body() requestBody: any) {
        return await prisma.order.create({
            data: {
                userId: Number(requestBody.userId),
                total: Number(requestBody.total)
            }
        });
    }

    @Patch('/:id')
    public async updateOrder(@Path() id: number, @Body() requestBody: any) {
        return await prisma.order.update({
            where: {
                id: Number(id)
            },
            data: {
                total: Number(requestBody.total)
            }
        });
    }

    @Delete('/:id')
    public async deleteOrder(@Path() id: number) {
        return await prisma.order.delete({
            where: {
                id: Number(id)
            }
        });
    }
}
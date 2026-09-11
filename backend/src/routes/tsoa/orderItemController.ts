import { prisma } from '../../db/db.ts';
import { Controller, Route, Get, Post, Patch, Delete, Path, Body, Tags, SuccessResponse } from 'tsoa';

@Route('orderItems')
@Tags('order-items')
export class OrderItemController extends Controller {
    @Get()
    public async getAllOrderItems() {
        return await prisma.orderItem.findMany();
    }

    @Get('/:id')
    public async getOrderItemByOrderId(@Path() id: number) {
        return await prisma.orderItem.findMany({
            where: {
                orderId: Number(id)
            }
        });
    }

    @Post()
    @SuccessResponse(201, "Order item created successfully")
    public async createOrderItem(@Body() requestBody: any) {
        return await prisma.orderItem.create({
            data: {
                orderId: requestBody.orderId,
                price: requestBody.price,
                imageURL: requestBody.imageURL,
                quantity: requestBody.quantity,
                productName: requestBody.productName
            }
        });
    }

    @Patch('/:id')
    public async updateOrderItem(@Path() id: number, @Body() requestBody: any) {
        return await prisma.orderItem.update({
            where: {
                id: Number(id)
            },
            data: {
                orderId: requestBody.orderId,
                price: requestBody.price,
                imageURL: requestBody.imageURL,
                quantity: requestBody.quantity,
                productName: requestBody.productName
            }
        });
    }

    @Delete('/:id')
    public async deleteOrderItem(@Path() id: number) {
        return await prisma.orderItem.delete({
            where: {
                id: Number(id)
            }
        });
    }
}
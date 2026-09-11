import { prisma } from "../../db/db.js";
import { Controller, Route, Path, Body, Post, Get, Patch, Delete, Tags } from "tsoa";

@Route('cartItems')
@Tags('cart-items')
export class CartItemController extends Controller {
    @Get()
    public async getAllCartItems() {
        return await prisma.cartItem.findMany();
    }

    @Get('/:id')
    public async getCartItemById(@Path() id: number) {
        return await prisma.cartItem.findUnique({
            where: {
                id: Number(id)
            }
        });
    }

    @Get('/users/:id')
    public async getCartItemsByUserId(@Path() id: number) {
        return await prisma.cartItem.findMany({
            where: {
                userId: Number(id)
            }
        });
    }

    @Post()
    public async createCartItem(@Body() requestBody: any) {
        return await prisma.cartItem.create({
            data: {
                userId: Number(requestBody.userId),
                batchId: requestBody.batchId ? Number(requestBody.batchId) : undefined,
                appliedPrice: Number(requestBody.appliedPrice),
                discountedPrice: Number(requestBody.discountedPrice),
                quantity: requestBody.quantity,
                productName: requestBody.productName,
                imageURL: requestBody.imageURL
            }
        });
    }

    @Patch('/:id')
    public async updateCartItem(@Path() id: number, @Body() requestBody: any) {
        return await prisma.cartItem.update({
            where: {
                id: Number(id)
            },
            data: {
                quantity: Number(requestBody.quantity)
            }
        });
    }

    @Delete('/:id')
    public async deleteCartItem(@Path() id: number) {
        return await prisma.cartItem.delete({
            where: {
                id: Number(id)
            }
        });
    }
}
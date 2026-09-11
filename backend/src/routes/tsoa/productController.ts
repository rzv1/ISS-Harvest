import { prisma } from "../../db/db.ts";
import { Controller, Route, Get, Post, Patch, Delete, Path, Body, Tags, SuccessResponse } from "tsoa";

@Route('products')
@Tags('products')
export class ProductController extends Controller {
    @Get()
    public async getAllProducts() {
        return await prisma.product.findMany();
    }

    @Get('/:id')
    public async getProductById(@Path() id: number) {
        return await prisma.product.findUnique({
            where: {
                id: Number(id)
            }
        });
    }

    @Post()
    @SuccessResponse(201, "Product created successfully")
    public async createProduct(@Body() requestBody: any) {
        return await prisma.product.create({
            data: {
                name: requestBody.name,
                basePrice: Number(requestBody.basePrice),
                TTL: Number(requestBody.TTL),
                imageURL: requestBody.imageURL
            }
        });
    }

    @Patch('/:id')
    public async updateProduct(@Path() id: number, @Body() requestBody: any) {
        return await prisma.product.update({
            where: {
                id: Number(id)
            },
            data: {
                name: requestBody.name,
                basePrice: Number(requestBody.basePrice),
                TTL: Number(requestBody.TTL),
                imageURL: requestBody.imageURL
            }
        });
    }

    @Delete('/:id')
    public async deleteProduct(@Path() id: number) {
        return await prisma.product.delete({
            where: {
                id: Number(id)
            }
        });
    }
}
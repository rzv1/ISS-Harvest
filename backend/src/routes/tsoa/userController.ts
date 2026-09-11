import { prisma } from '../../db/db.ts';
import { Controller, Route, Get, Post, Patch, Delete, Path, Body, Tags, SuccessResponse } from "tsoa";

@Route('users')
@Tags('users')
export class UserController extends Controller {
    @Get()
    public async getAllUsers() {
        return await prisma.user.findMany();
    }

    @Get('/:id')
    public async getUserById(@Path() id: number) {
        return await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });
    }

    @Post()
    @SuccessResponse(201, "User created successfully")
    public async createUser(@Body() requestBody: any) {
        return await prisma.user.create({
            data: {
                username: requestBody.username,
                password: requestBody.password,
                role: requestBody.role
            }
        });
    }

    @Post('/login')
    public async checkLogin(@Body() requestBody: any) {
        return await prisma.user.findUnique({
            where: {
                username: requestBody.username,
                password: requestBody.password
            }
        });
    }

    @Patch('/:id')
    public async updateUser(@Path() id: number, @Body() requestBody: any) {
        return await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                username: requestBody.username,
                password: requestBody.password,
                role: requestBody.role
            }
        });
    }

    @Delete('/:id')
    public async deleteUser(@Path() id: number) {
        return await prisma.user.delete({
            where: {
                id: Number(id)
            }
        });
    }
}
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb';

//admin paneli ürün güncelleme
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    console.log(params)
    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== "ADMIN") {
        return NextResponse.error();
    }

    const body = await request.json();
    const { name, price, categoryId, submenuId, description, image, restaurantId, ingredients } = body;
    console.log('body budur:', body)

    const product = await prisma.product.update({
        where: {
            id: params.id,
        },
        data: {
            name: name,
            description: description,
            restaurantId: restaurantId,
            submenuId: submenuId,
            categoryId: categoryId,
            price: parseFloat(price),
            ingredients: ingredients,
            image
        }
    });
    console.log

    return NextResponse.json(product);
}

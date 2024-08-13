import { getCategory } from '@/app/actions/getCategory';
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import prisma from '@/libs/prismadb'
import { NextResponse } from "next/server";

//Adding product
export async function POST(request: Request) {
    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const currentUser = await getCurrentUser();


    if (!currentUser || currentUser.role !== "ADMIN") {
        return (NextResponse.error())
    }
    const body = await request.json();
    const { name, description, restaurantId, categoryId, price, image, submenu, ingredients } = body;


    const product = await prisma.product.create({
        data: {
            name: capitalizeFirstLetter(name),
            description: capitalizeFirstLetter(description),
            restaurantId: '66b94544865234f03c741eb4', // `restaurant` yerine `restaurantId` kullanılmalı
            categoryId: categoryId,// `category  ` yerine `categoryId` kullanılmalı
            price: parseFloat(price),
            submenu,
            ingredients: capitalizeFirstLetter(ingredients),
            image
        }
    });
    return NextResponse.json(product)
}

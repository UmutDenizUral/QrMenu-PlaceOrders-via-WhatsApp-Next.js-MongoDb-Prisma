import { getCurrentUser } from '@/app/actions/getCurrentUser';
import prisma from '@/libs/prismadb'
import { NextResponse } from "next/server";

//Admin paneli yeni ürün ekleme
export async function POST(request: Request) {
    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== "ADMIN") {
        return (NextResponse.error())
    }
    const body = await request.json();
    const { name, description, restaurantId, categoryId, price, image, submenuId, ingredients } = body;

    const product = await prisma.product.create({
        data: {
            name: capitalizeFirstLetter(name),
            description: capitalizeFirstLetter(description),
            restaurantId: restaurantId,
            submenuId: submenuId,
            categoryId: categoryId,
            price: parseFloat(price),
            ingredients: capitalizeFirstLetter(ingredients),
            image:image
        }
    });
    return NextResponse.json(product)
}

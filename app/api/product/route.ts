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
    const { name, description, restaurant, category, price, image, submenu, ingredients } = body;

    const newRestaurant = await prisma.restaurant.create({
        data: {
            name: 'Pizza Place',
            location: 'kadıky'
        },
    });

    // Yeni bir kategori oluştur
    const newCategory = await prisma.category.create({
        data: {
            name: 'Pizzas',
        },
    });

    const product = await prisma.product.create({
        data: {
            name :capitalizeFirstLetter(name),
            description :capitalizeFirstLetter(description),
            restaurantId: newRestaurant.id, // `restaurant` yerine `restaurantId` kullanılmalı
            categoryId: newCategory.id,     // `category  ` yerine `categoryId` kullanılmalı
            price: parseFloat(price),
            submenu,
            ingredients: capitalizeFirstLetter(ingredients),
            image
        }
    });
    return NextResponse.json(product)
}

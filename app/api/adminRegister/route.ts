import bcrypt from 'bcrypt'
import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server';

//RegisterClient dan gelen istekle yeni kullanıcı oluşturma
export async function POST(request: Request) {
    const body = await request.json()
    const { name, email, password, restaurantName, phone, city, district, image } = body;
    const hashedPassword = await bcrypt.hash(password, 10)
        
    const restaurant = await prisma.restaurant.create({
        data: {
            name: restaurantName,
            phone: phone,
            city: city,
            district: district,
            image: image
        },
    });

    const submenu = await prisma.submenu.createMany({
        data: [
            { name: 'Yemek', restaurantId: restaurant.id },
            { name: 'İçecek', restaurantId: restaurant.id },
            { name: 'Atıştırmalık', restaurantId: restaurant.id },
            { name: 'Tatlı', restaurantId: restaurant.id }
        ],
    });

    // Yeni kullanıcı oluşturun
    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
            role: 'ADMIN', // Rol verilmemişse default USER rolü atanır
            restaurantId: restaurant.id // Restoranı kullanıcıya bağlayın
        },
    });
    return NextResponse.json(user)
}

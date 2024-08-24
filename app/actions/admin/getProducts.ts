import prisma from '@/libs/prismadb';
import { getCurrentUser } from '../getCurrentUser';

export async function getProducts() {
    const user = await getCurrentUser()
    const restaurantId: any = user?.restaurantId
    try {
        const products = await prisma.product.findMany({
            where: {
                restaurantId: restaurantId,
                submenuId: { not: null } // submenuId'si null olmayan ürünleri seç
            },
            select: {
                id: true,
                name: true,
                description: true,
                ingredients: true,
                price: true,
                image: true,
                submenu: true,
                category: true,
            }
        });
         
        return products;
    } catch (error) {
        console.error("Failed to fetch products", error);
        return null;
    }
}

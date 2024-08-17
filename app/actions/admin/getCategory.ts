import prisma from '@/libs/prismadb';
import { getCurrentUser } from '../getCurrentUser';

export async function getCategory() {
    const user = await getCurrentUser()
    const restaurantId: any = user?.restaurantId
    try {

        if (!restaurantId) {
            return null
        }
        const submenu = await prisma.category.findMany({
            where: {
                id: restaurantId // Restoran ID'sine göre sorgulama yap
            },
            select: {
                id: true,
                name: true,
                products: true,
            }
        });
        return submenu;
    } catch (error) {
        console.error("Failed to fetch category", error);
        return null;
    }
}



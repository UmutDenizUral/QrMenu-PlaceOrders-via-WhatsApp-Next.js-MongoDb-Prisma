import prisma from '@/libs/prismadb';
import { getCurrentUser } from '../getCurrentUser';

export async function getSubmenu() {
    const user = await getCurrentUser()
    const restaurantId: any = user?.restaurantId
    try {

        if (!restaurantId) {
            return null
        }
        const submenu = await prisma.submenu.findMany({
            where: {
                id: restaurantId 
            },
            select: {
                id: true,
                name: true,
                category:true,
                products: true,
            }
        });
        return submenu;
    } catch (error) {
        console.error("Failed to fetch submenu", error);
        return null;
    }
}




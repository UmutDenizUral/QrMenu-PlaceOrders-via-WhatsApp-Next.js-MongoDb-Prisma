import prisma from '@/libs/prismadb';
import { getCurrentUser } from '../getCurrentUser';

export async function getRestaurant() {
    const user = await getCurrentUser();
    const restaurantId: any = user?.restaurantId;

    try {
        if (!restaurantId) {
            return null;
        }

        // Restoranın tüm ilgili bilgilerini çek
        const restaurant = await prisma.restaurant.findUnique({
            where: {
                id: restaurantId 
            },
            include: {
                submenu: {
                    include: {
                        category: {
                            include: {
                                products: true 
                            }
                        }
                    }
                },
                products: true 
            }
        });
        return restaurant;
    } catch (error) {
        console.error("Failed to fetch restaurant", error);
        return null;
    }
}

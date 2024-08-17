import prisma from '@/libs/prismadb';

interface RestaurantParams {
    restaurantId?: string
}
export async function getRestaurantId(params: RestaurantParams) {
    const { restaurantId } = params

    try {
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
                        },
                        products: true
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

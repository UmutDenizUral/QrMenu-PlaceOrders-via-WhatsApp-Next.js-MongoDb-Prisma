import prisma from '@/libs/prismadb';

interface RestaurantParams {
    restaurantId?: string
}
export async function getRestPhone(params: RestaurantParams) {
    const { restaurantId } = params

    try {
        const restaurant = await prisma.restaurant.findUnique({
            where: {
                id: restaurantId
            },
            select: { phone: true }

        });
        return restaurant;
    } catch (error) {
        console.error("Failed to fetch restaurant", error);
        return null;
    }
}

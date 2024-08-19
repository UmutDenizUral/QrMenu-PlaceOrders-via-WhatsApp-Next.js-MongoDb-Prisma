import prisma from '@/libs/prismadb';

export async function getAllRestaurants() {

    try {
        const restaurant = await prisma.restaurant.findMany({
           
            select: {
                id: true,
                name: true,
                submenu: true,
                phone:true,
                city:true,
                district:true,
                image:true
            
            }
        });
        return restaurant;
    } catch (error) {
        console.error("Failed to fetch products", error);
        return null;
    }
}
//ana page de görüntülenecek
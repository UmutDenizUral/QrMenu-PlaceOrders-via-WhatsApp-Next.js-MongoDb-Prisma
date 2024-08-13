import prisma from '@/libs/prismadb';

export async function getProducts(restaurantId: string) {
    try {
        const products = await prisma.product.findMany({
            where: {
                restaurantId: restaurantId
            },
            select: {
                id: true,
                name: true,
                description: true,
                ingredients:true,
                price: true,
                image: true,
                submenu:true,
                categoryId:true,
            }
        });
        return products;
    } catch (error) {
        console.error("Failed to fetch products", error);
        return null;
    }
}

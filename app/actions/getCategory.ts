// /app/actions/getCategory.ts
import prisma from '@/libs/prismadb';

export async function getCategory() {
    try {
        const categories = await prisma.category.findMany({
            select: {
                id: true,
                name: true,
                products:true
            }
        });
        return categories;
    } catch (error) {
        console.error("Failed to fetch categories", error);
        return null;
    }
}



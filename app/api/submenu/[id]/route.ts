import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'

//Admin paneli ürün oluştururken submenulere göre category seçilmesi
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== "ADMIN") {
        return NextResponse.error();
    }

    try {
        if (!params.id) {
            return
        }
        const submenu = await prisma.submenu.findUnique({
            where: {
                id: params.id,
            },
            include: {
                category: true,
            },
        });

        if (!submenu) {
            return NextResponse.json({ message: "Submenu not found" }, { status: 404 });
        }
        console.log(submenu)
        return NextResponse.json(submenu);

    } catch (error) {
        console.error("Failed to fetch submenu and categories", error);
        return NextResponse.error();
    }
}

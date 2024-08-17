import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'
""
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== "ADMIN") {
        return NextResponse.error();
    }

    try {
        if (!params.id) {
            return
        }
        // Submenu'nun altındaki kategoriler ile birlikte çekilmesi
        const submenu = await prisma.submenu.findUnique({
            where: {
                id: params.id,
            },
            include: {
                // Submenu'nun altında bulunan kategorileri de içerecek şekilde
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

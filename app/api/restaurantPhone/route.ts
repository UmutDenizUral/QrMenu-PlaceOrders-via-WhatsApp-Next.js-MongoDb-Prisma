import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'

export async function GetPhone(request: Request, { params }: { params: { id: string } }) {

    try {
        if (!params.id) {
            return
        }
        const restaurantPhone = await prisma.restaurant.findUnique({
            where: {
                id: params.id,
            },
           select:{
            phone:true
           }
        });

        if (!restaurantPhone) {
            return NextResponse.json({ message: "Submenu not found" }, { status: 404 });
        }
        console.log(restaurantPhone)
        return NextResponse.json(restaurantPhone);

    } catch (error) {
        console.error("Failed to fetch submenu and categories", error);
        return NextResponse.error();
    }
}

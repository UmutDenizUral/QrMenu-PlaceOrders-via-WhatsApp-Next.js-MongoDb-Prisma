import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'

// whatsapp için restran telefon numarası bilgisi alma
export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        if (!params.id) {
            return NextResponse.json({ message: "Restaurant ID not provided" }, { status: 400 });
        }
        console.log(params.id)
        const restaurantPhone = await prisma.restaurant.findUnique({
            where: {
                id: params.id,
            },
           select:{
            phone:true
           }
        });

        if (!restaurantPhone) {
            return NextResponse.json({ message: "Restaurant not found" }, { status: 404 });
        }
        return NextResponse.json(restaurantPhone);

    } catch (error) {
        console.error("Failed to fetch restaurant phone", error);
        return NextResponse.error();
    }
}

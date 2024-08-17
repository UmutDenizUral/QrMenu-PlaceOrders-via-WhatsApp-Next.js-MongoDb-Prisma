import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { getSubmenu } from '@/app/actions/getSubmenu';
import prisma from '@/libs/prismadb'
import { NextResponse } from "next/server";

//Adding product
export async function POST(request: Request) {

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const currentUser = await getCurrentUser();
    if ( !currentUser || currentUser.role !== "ADMIN") {
        return (NextResponse.error())
    }
    const body = await request.json();
    const { name,submenuId  } = body;

    const category = await prisma.category.create({
        data: {
            name: capitalizeFirstLetter(name),
            submenuId:submenuId
           
        }
    });
    return NextResponse.json(category)
}

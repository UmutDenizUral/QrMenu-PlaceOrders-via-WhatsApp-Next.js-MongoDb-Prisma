import getProductsId from '@/app/actions/getProductId';
import { getRestaurantId } from '@/app/actions/getRestaurantId';
import PageContainer from '@/app/components/container/PageContainer';
import DetailClient from '@/app/components/detail/DetailClient';
import SideProduct from '@/app/components/detail/SideProduct';
import React from 'react'

type DetailProps = {
    params: {
        productid: string;
    }
}

const Detail = async ({ params }: DetailProps) => {

    const { productid } = params;
    const product = await getProductsId({ productId: productid });
    const restaurant = await getRestaurantId({ restaurantId: product?.restaurantId })

    return (
        <PageContainer center>
            <DetailClient product={product} />
            <SideProduct restrauntData={restaurant}  />
        </PageContainer>
    )   
}

export default Detail
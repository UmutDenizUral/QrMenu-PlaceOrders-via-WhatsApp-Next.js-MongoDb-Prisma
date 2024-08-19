
import { getRestaurantId } from '@/app/actions/getRestaurantId';
import PageContainer from '@/app/components/container/PageContainer';
import ProductSection from '@/app/home/ProductSection';
import React from 'react'

type DetailProps = {
    params: {
        restaurantid: string;
    }
}

const Restaurants = async ({ params }: DetailProps) => {
    const { restaurantid } = params;
    const restaurant = await getRestaurantId({ restaurantId: restaurantid });
    return (
        <div>
            <PageContainer>
                <ProductSection restaurantData={restaurant} />
            </PageContainer>
        </div>
    )
}
export default Restaurants
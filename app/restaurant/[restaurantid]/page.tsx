
import { getRestaurantId } from '@/app/actions/getRestaurantId';
import PageContainer from '@/app/components/container/PageContainer';
import Banner from '@/app/home/Banner';
import ProductSection from '@/app/home/ProductSection';
import React from 'react'
import Submenu from '@/app/home/Submenu';


type DetailProps = {
    params: {
        restaurantid: string;
    }
}

const Restaurants = async ({ params }: DetailProps) => {
    const { restaurantid } = params;
    const restaurant = await getRestaurantId({ restaurantId: restaurantid });
    console.log(restaurant)
  
    return (
        <div>
            <Banner />
            <PageContainer>
                <Submenu submenu={restaurant?.submenu} />
                <ProductSection restaurantData={restaurant} />
            </PageContainer>
        </div>

    )
}

export default Restaurants
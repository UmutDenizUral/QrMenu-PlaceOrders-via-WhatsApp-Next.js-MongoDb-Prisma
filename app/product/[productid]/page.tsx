import getProductsId from '@/app/actions/getProductId';
import PageContainer from '@/app/components/container/PageContainer';
import DetailClient from '@/app/components/detail/DetailClient';
import { products } from '@/utils/Products';
import React from 'react'


type DetailProps = {
    params: {
        productid: string;
    }
}

const Detail = async ({ params }: DetailProps) => {
    
    const { productid } = params;
   
    const product = await getProductsId({ productId: productid });

    return (
        <PageContainer>
            <DetailClient product={product} />
        </PageContainer>
    )
}

export default Detail
import PageContainer from '@/app/components/container/PageContainer';
import DetailClient from '@/app/components/detail/DetailClient';
import { products } from '@/utils/Products';
import React from 'react'


type DetailProps = {
    params: {
        productid: string;
    }
}

const Detail = ({ params }: DetailProps) => {
    
    const { productid } = params;

    const product = products.find(p => p.id === productid);
    return (
        <PageContainer>
            <DetailClient product={product} />
        </PageContainer>

    )
}

export default Detail
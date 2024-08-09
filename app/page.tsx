import React from 'react'
import Category from './home/Category'
import Banner from './home/Banner'
import ProductSection from './home/ProductSection'
import { products } from '@/utils/Products'
import PageContainer from './components/container/PageContainer'

const page = () => {

  return (
    <div className="lg:mx-32 border-r border-l" >
      
      <Banner />
      <PageContainer>
        <Category />
        <ProductSection products={products} />
        {/* önemsiz uyarı hata yok */}
      </PageContainer>


    </div>
  )
}

export default page
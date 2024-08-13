import React from 'react'
import Category from './home/Category'
import Banner from './home/Banner'
import ProductSection from './home/ProductSection'
// import { products } from '@/utils/Products'
import PageContainer from './components/container/PageContainer'
import { getProducts } from './actions/getProducts'
import { getCategory } from './actions/getCategory'

const page = async () => {
  const categories = await getCategory()
  return (
    <div className="lg:mx-32 border-r border-l" >
      
      <Banner />
      <PageContainer>
        <Category />
        <ProductSection categories={categories} />
        {/* önemsiz uyarı hata yok */}
      </PageContainer>


    </div>
  )
}

export default page
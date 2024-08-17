import React from 'react'
import Banner from './home/Banner'
import ProductSection from './home/ProductSection'
// import { products } from '@/utils/Products'
import PageContainer from './components/container/PageContainer'
import { getAllRestaurants } from './actions/getAllRestraunts'
import AllRestaurants from './home/AllRestaurants'

const page = async () => {
  const restraunts = await getAllRestaurants()
  return (
    <div className="lg:mx-32 border-r border-l" >
      
      <Banner />
      <PageContainer>
        {/* <Category />
        <ProductSection categories={categories} /> */}
        <AllRestaurants data = {restraunts}/>
        {/* önemsiz uyarı hata yok */}
      </PageContainer>


    </div>
  )
}

export default page
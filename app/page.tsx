import React from 'react'
import Banner from './home/Banner'
import PageContainer from './components/container/PageContainer'
import { getAllRestaurants } from './actions/getAllRestraunts'
import AllRestaurants from './home/AllRestaurants'
import Heading from './components/general/Heading'

const page = async () => {
  const restraunts = await getAllRestaurants()
  return (
    <div className="lg:mx-32 border-r border-l" >
      <Banner />
      <PageContainer>
        <Heading text={'Restoranlar'} />
        <AllRestaurants data={restraunts} />
      </PageContainer>
    </div>
  )
}

export default page
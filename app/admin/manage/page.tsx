import { getProducts } from '@/app/actions/admin/getProducts'
import { getRestaurant } from '@/app/actions/admin/getRestaurant'
import { getCurrentUser } from '@/app/actions/getCurrentUser'
import ManageClient from '@/app/components/admin/ManageClient'
import WarningText from '@/app/components/WarningText'
import React from 'react'


// bu sayfa düzeltilecek
const Manage = async () => {
  const currentUser = await getCurrentUser();
  const products = await getProducts()
  const restaurantData = await getRestaurant()
  if (!currentUser || currentUser.role !== 'ADMIN') {
    return <WarningText text="Buraya Giremezsin" />;
  }

  if (!restaurantData) {
    return <WarningText text="Restoran verisi alınamadı." />;
  }
  return (
    <div className=' overflow-auto'>
      <ManageClient products={products} restaurantData={restaurantData} />
    </div>
  )
}

export default Manage
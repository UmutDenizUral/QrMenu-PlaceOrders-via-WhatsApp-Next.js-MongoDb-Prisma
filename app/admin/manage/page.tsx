
import { getCategory } from '@/app/actions/admin/getCategory'
import { getProducts } from '@/app/actions/admin/getProducts'
import ManageClient from '@/app/components/admin/ManageClient'
import React from 'react'


// bu sayfa düzeltilecek
const Manage = async () => {

  const products = await getProducts()
  const categories = await getCategory()
  console.log(categories)
  return (
    <div>
      <ManageClient products={products} categories ={categories} />
    </div>
  )
}

export default Manage
import { getCategory } from '@/app/actions/getCategory'
import { getProducts } from '@/app/actions/getProducts'
import ManageClient from '@/app/components/admin/ManageClient'
import React from 'react'

const Manage = async () => {

  const products = await getProducts('66b94544865234f03c741eb4')
  const categories = await getCategory()
  console.log(categories)
  return (
    <div>
      <ManageClient products={products} categories ={categories} />
    </div>
  )
}

export default Manage
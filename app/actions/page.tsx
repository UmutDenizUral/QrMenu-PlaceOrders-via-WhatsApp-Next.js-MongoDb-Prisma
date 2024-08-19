
import React from 'react'

import { getRestaurant } from './admin/getRestaurant'
import { getCategory } from './admin/getCategory'
import FullFeaturedCrudGrid from '../components/admin/test'

const page = async () => {

    const cat = await getCategory()
    const restaurant = await getRestaurant()

    return (
        <div>
s
        </div>
    )
}

export default page
// {cat?.map((item)=>
//     <div >
//         <p>{item.name}</p>
//         <hr />
//         {item.products.map(product=>(
//             product.name
//         ))}
//     </div> )}

import React from 'react'
import { getCategory } from './getCategory'
import Category from '../home/Category'

const page = async () => {

    const cat = await getCategory()

    return (
        <div>
            {cat?.map((item)=>
            <div >
                <p>{item.name}</p>
                <hr />
                {item.products.map(product=>(
                    product.name
                ))}
            </div> )}
        </div>
    )
}

export default page
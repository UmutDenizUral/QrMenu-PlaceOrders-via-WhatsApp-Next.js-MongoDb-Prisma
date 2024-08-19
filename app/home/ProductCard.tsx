import React from 'react'
import Image from 'next/image'
import Heading from '../components/general/Heading'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useCart from '@/hooks/useCart'
import Button from '../components/general/Button'
const ProductCard = ({ product, restName }: { product: any, restName: any }) => {

  const { addToBasket } = useCart()
  product = { ...product, restaurantName: restName }
  const { id, name, description, price, ingredients, image, category, restaurantName } = product
  const capitalizeFirstLetter = (str: string) => (str.charAt(0).toUpperCase() + str.slice(1))

  return (
    <Link href={`/product/${id}`}>
      <div className='border rounded-lg  ' style={{ backgroundColor: 'ghostwhite' }} >
        <div className='flex gap-2 h-[200px]  w-full shadow-md shadow-gray-200  '>
          <div className='min-w-[120px]  relative  w-[150px] '>
            <Image
              fill
              src={image}
              alt='yok'
              className='object-cover  rounded  ' />
          </div>
          <div id='products sağ' className='w-full'>
            <Heading text={name} submenu />
            <div className='px-3 flex items-center  justify-center'>
              <div className=' flex-grow   font-medium'>
                {price} <span className='font-semibold'>₺</span>
              </div>
              <div className="">
                <Button text='Sepete Ekle' onClick={() => addToBasket(product)} />
              </div>
            </div>
            <div className='px-3 my-1'>{capitalizeFirstLetter(description)}</div>
          </div>

        </div>
      </div>
    </Link>

  )
}
export default ProductCard

// <div className='flex-1 mt-1'>
// <Heading text={name} submenu />
// <div className='p-2'>
//   <div>{capitalizeFirstLetter(description)}</div>
//   <div className='my-1 mt-2 font-medium'>{price} <span className='font-semibold'>₺</span></div>
// </div>
// </div>
// <div className="flex  flex-col justify-center items-center gap-2 mr-2">
// <Button text='Sepete Ekle' onClick={() => addToBasket(product)} />
// </div>
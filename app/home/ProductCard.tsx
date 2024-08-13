import React from 'react'
import Image from 'next/image'
import Heading from '../components/general/Heading'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useCart from '@/hooks/useCart'
import Button from '../components/general/Button'
const ProductCard = ({ product }: { product: any }) => {

  const {addToBasket} = useCart()

  const { id,name, description, price, ingredients, image, category } = product
  const capitalizeFirstLetter = (str: string) => (str.charAt(0).toUpperCase() + str.slice(1))

  const buttonStyle = 'w-8 h-8 border flex items-center justify-center text-xl rounded-full cursor-pointer '
  return (
    <Link href={`/product/${id}`}>
      <div className='border rounded-lg  '  style={{ backgroundColor: 'ghostwhite' }} >
        <div className='flex gap-2 h-[200px]  w-full shadow-md shadow-gray-200  '>
          <div className='  relative  w-[120px] '>
            <Image
              fill
              src={image}
              alt='yok'
              className='object-cover  rounded  ' />
          </div>
          <div className='flex-1 mt-1'>
            <Heading text={name} submenu />
            <div className='p-2'>
              {/* <div>{description}</div> */}
              {/* <div className='text-sm'>{capitalizeFirstLetter(ingredients.join(', '))}</div> */}
              <div className='my-1 mt-2 font-medium'>{price} <span className='font-semibold'>₺</span></div>
            </div>
          </div>
          <div className="flex  flex-col justify-center items-center gap-2 mr-2">
          <Button text='Sepete Ekle' onClick={()=>addToBasket(product)}/>
          </div>
        </div>
      </div>
    </Link>

  )
}

export default ProductCard

// name: "Kola",
// description: "Serinletici bir kola.",
// price: 20,
// ingredients: ["su", "şeker", "kafein"],
// category: "içecek",
// image: "https://example.com/images/kola.jpg",
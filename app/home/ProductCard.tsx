import React from 'react';
import Image from 'next/image';
import Heading from '../components/general/Heading';
import Link from 'next/link';
import useCart from '@/hooks/useCart';
import Button from '../components/general/Button';

const ProductCard = ({ product, restName }: { product: any, restName: any }) => {
  const { addToBasket, cartProducts } = useCart();
  product = { ...product, restaurantName: restName };
  const { id, name, description, price, ingredients, image, category, restaurantName } = product;
  const capitalizeFirstLetter = (str: string) => (str.charAt(0).toUpperCase() + str.slice(1));

  return (
    <div className='border rounded-lg' style={{ backgroundColor: 'ghostwhite' }}>
      <Link href={`/product/${id}`}>
        <div className='flex gap-2 h-[200px]  w-full shadow-md shadow-gray-200'>
          <div className='min-w-[120px]  relative  w-[150px]'>
            <Image
              fill
              src={image}
              alt='yok'
              className='object-cover rounded' />
          </div>
          <div id='products sağ' className='w-full'>
            <Heading text={name} submenu />
            <div className='px-3 flex items-center  justify-center'>
              <div className='flex-grow font-medium'>
                {price} <span className='font-semibold'>₺</span>
              </div>
              <div className="" onClick={(e) => e.preventDefault()}>

                {
                  (cartProducts?.some(item => item.id === id))
                    ? <Button text="Ürün Sepette" disabled outline onClick={() => addToBasket(product)} />
                    : <Button text='Sepete Ekle' onClick={() => addToBasket(product)} />
                }

              </div>
            </div>
            <div className='px-3 my-1'>{capitalizeFirstLetter(description)}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

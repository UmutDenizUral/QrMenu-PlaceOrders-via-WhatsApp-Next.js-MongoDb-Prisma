'use client'
import React, { useEffect, useState } from 'react';
import Heading from '../components/general/Heading';
import ProductCard from './ProductCard';
import { getCategory } from '../actions/getCategory';
import { submenuList } from '../components/admin/CreateForm';


const ProductSection: React.FC =  ({categories}:any) => {

  return (
    <div className='mx-3'>
      {submenuList.map((submenu, i) => (
        <div id={submenu.name} key={i}>
          <Heading text={submenu.name} />
          {categories?.map(category => (
            <div key={category.id}>
              <Heading text={category.name} submenu />
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4' >
                {category?.products.map((product, i)=>(
                <ProductCard product={product}/>))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductSection;



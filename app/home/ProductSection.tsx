'use client'

import { Category, Product, Restaurant, Submenu } from "@prisma/client";
import Heading from "../components/general/Heading";
import ProductCard from "./ProductCard";
import SubmenuSection from "./Submenu";
import Image from "next/image";
import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";


interface RestaurantWithSubmenu extends Restaurant {
  submenu: (Submenu & {
    category: (Category & {
      products: Product[];
    })[];
  })[];
}

// SectionProps tipini güncelliyoruz
interface SectionProps {
  restaurantData: RestaurantWithSubmenu | null;
}

const ProductSection: React.FC<SectionProps> = ({ restaurantData }: any) => {

  useEffect(() => {

    localStorage.setItem('restId', restaurantData.id)
  }, [restaurantData])

  return (
    <div className='mx-3'>

      <RestrauntCard restaurantData={restaurantData} />
      <div className="my-2 p-1 text-sm flex items-center justify-start"><div className="flex justify-center items-center border-yellow-600 rounded-full border-2  mr-1  w-6 h-6">?</div> Sepeti doldurup WhatsApp ile sipariş verebilirsiniz</div>
      <SubmenuSection submenu={restaurantData?.submenu} />
      {
        restaurantData?.submenu?.map((submenu: any, i: any) => (

          submenu?.products?.length > 0 ?
            <div key={i}>
              <Heading text={submenu.name} id={submenu.name} />
              {
                submenu.category.map((category: any, i: any) => (
                  category?.products?.length > 0 ?
                    <div key={i}>

                      <Heading submenu text={category.name} />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                          category?.products?.map((product: any, i: any) => (
                            <ProductCard key={i} restName={restaurantData.name} product={product} />
                          ))
                        }
                      </div>
                    </div>
                    : null
                ))
              }
            </div>
            : null
        ))
      }
    </div>
  );
};

export default ProductSection;



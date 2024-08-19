'use client'

import { Category, Product, Restaurant, Submenu } from "@prisma/client";
import Heading from "../components/general/Heading";
import ProductCard from "./ProductCard";

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
  console.log(restaurantData.submenu[0].products)
  return (
    <div className='mx-3'>
      <h2> {restaurantData.name}</h2>
      {
        restaurantData?.submenu?.map((submenu: any, i: any) => (

          submenu?.products?.length > 0 ?
            <div key={i}>
              <Heading text={submenu.name} id={submenu.name} />
              {
                submenu.category.map((category: any, i: any) => (
                  category?.products?.length >0 ?
                  <div key={i}>
                    <Heading submenu text={category.name} />

                    {/* {JSON.stringify(category.products[0]?.id)} */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {
                        category?.products?.map((product: any, i: any) => (
                          <ProductCard key={i} product={product} />
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



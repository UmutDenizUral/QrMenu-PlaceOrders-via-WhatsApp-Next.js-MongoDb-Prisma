'use client'
import { products } from '@/utils/Products';
import { Product } from '@/utils/Products';
import React, { useEffect, useState } from 'react';
import Heading from '../components/general/Heading';
import ProductCard from './ProductCard';

interface CategoryGroup {
  submenu: string;
  categories: { [key: string]: Product[] };
}


export function groupProducts(products: Product[]): CategoryGroup[] {
  const grouped: { [submenu: string]: { [category: string]: Product[] } } = {};

  products.forEach(product => {
    if (!grouped[product.submenu]) {
      grouped[product.submenu] = {};
    }
    if (!grouped[product.submenu][product.category]) {
      grouped[product.submenu][product.category] = [];
    }
    grouped[product.submenu][product.category].push(product);
  });
  return Object.keys(grouped).map(submenu => ({
    submenu,
    categories: grouped[submenu]
  }));
}

const ProductSection: React.FC = () => {
  const [categoryGroups, setCategoryGroups] = useState<CategoryGroup[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const groupedProducts = groupProducts(products);
      setCategoryGroups(groupedProducts);
    }
    loadProducts();
  }, []);

  return (
    <div className='mx-3'>
      {categoryGroups.map(group => (
        <div id={group.submenu} key={group.submenu}>
          <Heading text={group.submenu} />
          {Object.keys(group.categories).map(category => (
            <div key={category}>
              <Heading text={category} submenu />
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4' >
                {group.categories[category].map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductSection;



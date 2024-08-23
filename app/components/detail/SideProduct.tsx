'use client'
import useCart from '@/hooks/useCart';
import { Product } from '@prisma/client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface OptionProps {
    products: Product[]
    name?: string
}

//Ürün detay sayfasın altında çıkan yan ürünler
const SideProduct = ({ restrauntData }: any) => {
    const [option, setOption] = useState<OptionProps>()
    const { addToBasket, cartProducts } = useCart()

    const drinks: any = restrauntData.submenu.find((drink: any) => drink.name === 'İçecek');
    const promos: any = restrauntData.submenu.find((promo: any) => promo.name === 'Atıştırmalık');
    const foods: any = restrauntData.submenu.find((food: any) => food.name === 'Yemek');
    const desserts: any = restrauntData.submenu.find((dessert: any) => dessert.name === 'Tatlı');

    useEffect(() => {
        if (promos?.products?.length == 0) {
            if (desserts?.products?.length == 0) {
                setOption(foods)
            }
            setOption(desserts)
        }
    }, [drinks, promos, foods, desserts])

    return (
        <div className="sm:flex mt-2 w-full shadow-lg">
            <div id="içeçek" className="w-full p-2 overflow-y-auto max-h-[290px] sm:max-h-[500px]">
                <h4 className="sticky -top-2 bg-white z-10 flex items-center p-2 font-semibold">İçeçek</h4>
                {
                    drinks?.products?.length > 0
                        ?
                        drinks.products.map((drink: any, i: any) => (
                            <div className="flex mt-2 border-t-2 py-1 pt-3 items-center justify-between gap-2" key={i}>
                                <div className="relative">
                                    <Image
                                        src={drink.image}
                                        width={50}
                                        height={50}
                                        alt=""
                                    />
                                </div>
                                <div className="flex-grow text-center">{drink.name}</div>
                                <div className="text-center">{drink.price} <span className='font-semibold px-1'>₺</span></div>
                                {
                                    (cartProducts?.some(item => item.id === drink.id))
                                        ?
                                        <div className="flex cursor-pointer items-center justify-center border-yellow-600 text-sm p-3 border font-bold rounded-full text-black w-5 h-5">
                                            1
                                        </div>
                                        :
                                        <div onClick={() => addToBasket(drink)} className="flex cursor-pointer items-center justify-center border-yellow-600 text-md p-3 border font-bold rounded-full text-black w-5 h-5">
                                            +
                                        </div>
                                }
                            </div>
                        ))
                        :
                        <div className='p-1'>Gösterilecek ürün bulunamadı </div>
                }
            </div>
            <div id={option?.name} className=" w-full p-2 overflow-y-auto max-h-[290px]  sm:max-h-[500px] ">
                <h4 className="sticky -top-2 bg-white z-10 flex items-center p-2 font-semibold">Atıştırmalık</h4>
                {option ? <div>
                    {option?.products?.map((promo: any, i: any) => (
                        <div className="flex mt-2 border-t-2 py-1 pt-3 items-center justify-between gap-2" key={i}>
                            <div className="relative">
                                <Image
                                    src={promo.image}
                                    width={50}
                                    height={50}
                                    alt=""
                                />
                            </div>
                            <div className="flex-grow text-center">{promo.name}</div>
                            <div className="text-center">{promo.price} <span className='font-semibold px-1'>₺</span></div>
                            {
                                (cartProducts?.some(item => item.id === promo.id))
                                    ?
                                    <div className="flex cursor-pointer items-center justify-center border-yellow-600 text-sm p-3 border font-bold rounded-full text-black w-5 h-5">
                                        1
                                    </div>
                                    :
                                    <div onClick={() => addToBasket(promo)} className="flex cursor-pointer items-center justify-center border-yellow-600 text-md p-3 border font-bold rounded-full text-black w-5 h-5">
                                        +
                                    </div>
                            }
                        </div>
                    ))}
                </div> : <div>Gösterilecek ürün bulunamadı</div>
                }
            </div>
        </div>
    );
};

export default SideProduct;

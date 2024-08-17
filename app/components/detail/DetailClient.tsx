'use client'
import { Product, products } from "@/utils/Products"
import PageContainer from "../container/PageContainer"
import Image from "next/image"
import Heading from "../general/Heading"
import ProductCard from "@/app/home/ProductCard"
import useCart from "@/hooks/useCart"
import { useEffect, useState } from "react"
import Button from "../general/Button"
import { useRouter } from "next/navigation"



const DetailClient = ({ product }: any) => {
    const router = useRouter()

    const { addToBasket, cartProducts } = useCart()


    const drinks: any = products.filter(drink => drink.submenu == 'İçecek')
    const promos: any = products.filter(promo => promo.submenu == 'Atıştırmalık')

    const { id, name, description, price, ingredients, image } = product
    return (
        
            <div className="flex flex-col flex-grow  justify-center items-center mx-1  border-r-2 border-l-2  ">
                <div className=" rounded-md flex w-full  flex-col items-start justify-center border-t-0 border border-1">
                    <div className="relative flex items-center w-full h-[200px] sm:h-[400px] ">
                        <Image
                            src={image}
                            fill
                            className="object-cover"
                            alt="yok"
                        />
                    </div>
                    <div className="px-2 py-1">
                        <h3 className="font-bold my-2">{name}</h3>
                        <p className="text-left text-sm">{description}</p>
                        <p>{price} TL</p>
                    </div>
                    {
                        (cartProducts?.some(item => item.id === id)) ? <div className="flex gap-4">
                            <Button text="Ürün Sepette" disabled outline small onClick={() => addToBasket(product)} />
                            <Button text="Sepete Git" onClick={() => router.push('/cart')} />
                        </div> : <Button text="Sepete Ekle" small onClick={() => addToBasket(product)} />

                    }
                </div>
                

            </div>
   
    )
}

export default DetailClient

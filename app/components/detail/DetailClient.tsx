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

    const { id, name, description, price, ingredients, image } = product
    return (

        <div className="flex flex-col flex-grow  justify-center items-center mx-1 my-6 shadow-xl ">
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
                    <p className="">{price}<span className='font-semibold px-1'>₺</span></p>
                    <p className="text-left text-sm">{description}</p>
                </div>
                {
                    (cartProducts?.some(item => item.id === id)) ? <div className="flex mb-2 mx-auto gap-4">
                        <Button text="Ürün Sepette" disabled outline small onClick={() => addToBasket(product)} />
                        <Button text="Sepete Git" onClick={() => router.push('/cart')} />
                    </div> : <Button text="Sepete Ekle" onClick={() => addToBasket(product)} />

                }
            </div>


        </div>

    )
}

export default DetailClient

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
    const [displayButton, setDisplayButton] = useState(true)

    const { addToBasket, cartProducts } = useCart()

    useEffect(() => {
        console.log('button :', displayButton)
        {console.log(cartProducts)}
        if (cartProducts) {
            setDisplayButton(false)
        }
    }, [cartProducts]);

    const drinks: any = products.filter(drink => drink.submenu == 'İçecek')
    const promos: any = products.filter(promo => promo.submenu == 'Atıştırmalık')

    const { id, name, description, price, ingredients, image } = product
    return (
        <PageContainer center>
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
                    {       //hatalı burası düzelcek useeffecet çalılıyor
                        (cartProducts?.some(item => item.id === id)) ? <div className="flex gap-4">
                            <Button text="Ürün Sepette" disabled outline small onClick={() => addToBasket(product)} />
                            <Button text="Sepete Git" onClick={() => router.push('/cart')} />
                        </div> : <Button text="Sepete Ekle" small onClick={() => addToBasket(product)} />

                    }
                </div>
                
                <div className="sm:flex mt-2 w-full">
                    <div id="içeçek" className="w-full p-2 overflow-y-auto max-h-[290px] sm:max-h-[500px]">
                        <h4 className="sticky -top-2 bg-white z-10 flex items-center p-2 font-semibold">İçeçek</h4>
                        {
                            drinks.map((drink, i) => (
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
                                    <div className="text-center">{drink.price} TL</div>
                                    
                                    {
                                        (cartProducts?.some(item => item.id === drink.id))
                                            ? <div className="flex cursor-pointer items-center justify-center border-yellow-600 text-xl p-3 border font-bold rounded-full text-black w-5 h-5">
                                                1
                                            </div>
                                            :
                                            <div onClick={() => addToBasket(drink)} className="flex cursor-pointer items-center justify-center border-yellow-600 text-xl p-3 border font-bold rounded-full text-black w-5 h-5">
                                                +
                                            </div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                    
                    <div id="Atıştırmalık" className=" w-full p-2 overflow-y-auto max-h-[290px]  sm:max-h-[500px] ">
                    <h4 className="sticky -top-2 bg-white z-10 flex items-center p-2 font-semibold">Atıştırmalık</h4>
                        {
                            promos.map((promo, i) => (
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
                                    <div className="text-center">{promo.price} TL</div>
                                    {
                                        (cartProducts?.some(item => item.id === promo.id))
                                            ? <div className="flex cursor-pointer items-center justify-center border-yellow-600 text-xl p-3 border font-bold rounded-full text-black w-5 h-5">
                                                1
                                            </div>
                                            :
                                            <div onClick={() => addToBasket(promo)} className="flex cursor-pointer items-center justify-center border-yellow-600 text-xl p-3 border font-bold rounded-full text-black w-5 h-5">
                                                +
                                            </div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </PageContainer>
    )
}

export default DetailClient

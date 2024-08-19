'use client'
import useCart, { CardProductsProps } from "@/hooks/useCart"
import PageContainer from "../container/PageContainer"
import Image from "next/image"
import Button from "../general/Button"


import WhatsAppLink from "../general/WhatsAppLink"
import Counter from "../general/Counter"
import Heading from "../general/Heading"
import { useCallback, useEffect, useState } from "react"
import { getRestPhone } from "@/app/actions/getRestPhone"
import axios from "axios"
// local storage de ürünlerin rest idsine bakıcak eğer farkı restrandan ürünler varsa uyarı vericek 




const CartClient = () => {
    const { cartProducts, removeFromCart, removeCart, addToBasketIncrease, addToBasketDecrease } = useCart()
    const [restPhone, setRestPhone] = useState()

    const fetchRestaurantPhone = async (id: any) => {
        try {
            alert("fetch çalıştı")
            const response = await axios.get(`/api/restaurant/${id}/phone`) // Örnek API çağrısı
            return response.data.phone
        } catch (error) {
            console.error("Telefon numarası alınırken bir hata oluştu:", error) 
            return null
        }
    }

    // useCallback ile fonksiyonun çalışmasını kontrol edin
    const getRestaurantPhone = useCallback(async (id: any) => {
        const phone = await fetchRestaurantPhone(id) // Kendi kendini çağırmak yerine doğru fonksiyonu çağırın
        console.log('Restaurant phone verisi:', phone)
        setRestPhone(phone)
    }, [])

    useEffect(() => {
        if (cartProducts && cartProducts.length > 0) {
            const restaurantId = cartProducts[0]?.restaurantId; // İlk ürünün restoran ID'sini alın
            if (restaurantId) {
                getRestaurantPhone(restaurantId)
            }
        }
    }, [cartProducts, getRestaurantPhone])

    if (!cartProducts || cartProducts.length == 0) {

        return <PageContainer>
            <Heading text="Sepet" />
            <div >
                <p className="my-2">Sepetinizde ürün bulunmamaktadır.</p>
                <a className="text-sm underline hover:text-yellow-600" href="/">Yemekleri keşfet --></a>
            </div>
        </PageContainer>
    }
    let cartProductsTotal = cartProducts.reduce((acc: any, item: CardProductsProps) => acc + item.quantity * item.price, 0)
    return (
        <div className="my-3 md:my-10">
            <PageContainer>
                <div className="flex text-center items-center gap-3 border-b py-3">
                    <div className=" w-1/6">Restoran</div>
                    <div className=" w-1/6">Ürün resmi</div>
                    <div className=" w-1/6">Ürün Adı</div>
                    <div className=" w-1/6">Ürün Miktarı</div>
                    <div className=" w-1/6">Ürün Fiyatı</div>
                    <div className=" w-1/6"></div>
                </div>
                <div>
                    {cartProducts.map(((product, i) => (
                        <div key={i} className="flex text-center items-center gap-3 border-b py-2">
                            <div className=" w-1/6">{product.restaurantId}</div>
                            <div className=" w-1/6 flex items-center justify-center">
                                <Image
                                    src={product.image}
                                    width={40}
                                    height={40}
                                    alt="yok" />
                            </div>
                            <div className=" w-1/6">{product.name}</div>
                            <div className=" w-1/6">{product.quantity}</div>
                            <div className=" w-1/6"> {product.price}</div>
                            <Counter increaseFunc={() => addToBasketIncrease(product)} decreaseFunc={() => addToBasketDecrease(product)} cardProduct={product} />
                        </div>
                    )))}
                </div>
                <div className="flex items-center justify-between my-5 py-5 border-t">
                    <button onClick={() => removeCart()} className=" w-1/6 underline text-sm">Sepet Sİl</button>
                    <div className="flex justify-between gap-2">
                        <div className="flex justify-center items-center text-lg md:text-2xl text-orange-600 font-bold px-2">{cartProductsTotal}TL</div>
                        <WhatsAppLink phoneNumber={restPhone} />

                    </div>

                </div>
            </PageContainer>
        </div>
    )
}
export default CartClient
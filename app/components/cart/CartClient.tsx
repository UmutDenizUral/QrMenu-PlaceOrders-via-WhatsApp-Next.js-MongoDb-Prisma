'use client'
import useCart, { CardProductsProps } from "@/hooks/useCart"
import PageContainer from "../container/PageContainer"
import Image from "next/image"
import WhatsAppLink from "../general/WhatsAppLink"
import Counter from "../general/Counter"
import Heading from "../general/Heading"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"

// Sepet işlemleri 
const CartClient = () => {
    const { cartProducts, removeFromCart, removeCart, addToBasketIncrease, addToBasketDecrease } = useCart()
    const [restPhone, setRestPhone] = useState<string | undefined>()
    const [wpOrder, setWpOrder] = useState(true)
    const url = localStorage.getItem('restId')

    const getRestaurantPhone = useCallback(async (id: any) => {
        const phone = await fetchRestaurantPhone(id)
        setRestPhone(phone)
    }, [])

    const fetchRestaurantPhone = async (id: any) => {
        try {
            const response = await axios.get(`/api/restaurantPhone/${id}`)
            return response.data.phone;
        } catch (error) {
            console.error("Telefon numarası alınırken bir hata oluştu:", error);
            return null;
        }
    }

    useEffect(() => {
        if (cartProducts && cartProducts.length > 0) {
            const restaurantId = cartProducts[0]?.restaurantId;
            if (restaurantId) {
                getRestaurantPhone(restaurantId);
            }
    
            const restaurantIds = cartProducts.map(product => product.restaurantId);
            
            // Benzersiz restoran kimliklerini almak için dizi filtreleme kullanıyoruz
            const uniqueRestaurantIds = restaurantIds.filter((id, index, self) => self.indexOf(id) === index);
    
            if (uniqueRestaurantIds.length > 1) {
                setWpOrder(false);
                toast.error("Sepetinizde farklı restoranlardan ürünler var. Lütfen tek bir restorandan ürün ekleyin.");
            } else if (uniqueRestaurantIds.length === 1) {
                setWpOrder(true);
            }
        }
    }, [cartProducts, getRestaurantPhone]);
    

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <PageContainer>
                <Heading text="Sepet" />
                <div>
                    <p className="my-2">Sepetinizde ürün bulunmamaktadır.</p>
                    <a className="text-sm underline hover:text-yellow-600" href={`/restaurant/${url}`}>Yemekleri keşfet --{'>'}</a>
                </div>
            </PageContainer>
        )
    }

    let cartProductsTotal = cartProducts.reduce((acc: number, item: CardProductsProps) => acc + item.quantity * item.price, 0)
    return (
        <div className="my-3 md:my-10">
            <PageContainer>
                <div className="flex text-center items-center gap-3 border-b py-3">
                    <div className="w-1/6">Restoran</div>
                    <div className="w-1/6">Ürün Resmi</div>
                    <div className="w-1/6">Ürün Adı</div>
                    <div className="w-1/6">Ürün Miktarı</div>
                    <div className="w-1/6">Ürün Fiyatı</div>
                    <div className="w-1/6"></div>
                </div>
                <div>
                    {cartProducts.map((product, i) => (
                        <div key={i} className="flex text-center items-center gap-3 border-b py-2">
                            <div className="w-1/6">{product.restaurant}</div>
                            <div className="w-1/6 flex items-center justify-center">
                                <Image
                                    src={product.image}
                                    width={40}
                                    height={40}
                                    alt="Ürün Resmi" />
                            </div>
                            <div className="w-1/6">{product.name}</div>
                            <div className="w-1/6">{product.quantity}</div>
                            <div className="w-1/6">{product.price} TL</div>
                            <Counter 
                                increaseFunc={() => addToBasketIncrease(product)} 
                                decreaseFunc={() => addToBasketDecrease(product)} 
                                cardProduct={product} 
                            />
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-between my-5 py-5 border-t">
                    <button onClick={() => removeCart()} className="w-1/6 underline text-sm">Sepet Sil</button>
                    <div className="flex justify-between gap-2">
                        <div className="flex justify-center items-center text-lg md:text-2xl text-orange-600 font-bold px-2">
                            {cartProductsTotal} TL
                        </div>
                        {wpOrder ? 
                            <WhatsAppLink phoneNumber={restPhone} /> 
                            : <div className="flex items-center justify-center border-2 p-2 border-red-600">
                                WhatsApp ile sipariş verebilmek için tek bir restoran seçiniz 
                            </div>}
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}
export default CartClient

'use client'
import useCart, { CardProductsProps } from "@/hooks/useCart"
import PageContainer from "../container/PageContainer"
import Image from "next/image"
import Button from "../general/Button"


import WhatsAppLink from "../general/WhatsAppLink"
import Counter from "../general/Counter"

const CartClient = () => {
    const { cartProducts, removeFromCart, removeCart, addToBasketIncrease, addToBasketDecrease } = useCart()
    console.log(cartProducts)
    if (!cartProducts || cartProducts.length == 0) {

        return <div>Sepetinizde ürün bulunmamaktadır</div>
    }
    let cartProductsTotal = cartProducts.reduce((acc: any, item: CardProductsProps) => acc + item.quantity * item.price, 0)
    return (
        <div className="my-3 md:my-10">
            <PageContainer>
                <div className="flex text-center items-center gap-3 border-b py-3">
                    <div className="w-1/5">Ürün resmi</div>
                    <div className="w-1/5">Ürün Adı</div>
                    <div className="w-1/5">Ürün Miktarı</div>
                    <div className="w-1/5">Ürün Fiyatı</div>
                    <div className="w-1/5"></div>
                </div>
                <div>
                    {cartProducts.map(((product,i) => (
                        <div key={i}  className="flex text-center items-center gap-3 border-b py-2">
                            <div className="w-1/5 flex items-center justify-center">
                                <Image
                                    src={product.image}
                                    width={40}
                                    height={40}
                                    alt="yok" />
                            </div>
                            <div className="w-1/5">{product.name}</div>
                            <div className="w-1/5">{product.quantity}</div>
                            <div className="w-1/5"> {product.price}</div>

                            <Counter increaseFunc={() => addToBasketIncrease(product)} decreaseFunc={() => addToBasketDecrease(product)} cardProduct={product} />

                        </div>
                    )))}
                </div>
                <div className="flex items-center justify-between my-5 py-5 border-t">
                    <button onClick={() => removeCart()} className="w-1/5 underline text-sm">Sepet Sİl</button>
                    <div className="flex justify-between gap-2">
                        <div className="flex justify-center items-center text-lg md:text-2xl text-orange-600 font-bold px-2">{cartProductsTotal}TL</div>
                        <WhatsAppLink />

                    </div>

                </div>
            </PageContainer>
        </div>
    )
}
export default CartClient
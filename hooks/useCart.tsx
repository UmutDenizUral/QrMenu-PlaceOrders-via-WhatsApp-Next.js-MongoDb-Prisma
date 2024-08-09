'use client'
import React, { createContext, useCallback, useState, useContext, ReactNode, useEffect } from 'react';
import toast from 'react-hot-toast';


// CartContext için props tipi
interface CartContextProps {
    productCartQty: number
    cartProducts: CardProductsProps[] | null
    addToBasket: (product: CardProductsProps) => void
    addToBasketIncrease: (product: CardProductsProps) => void
    addToBasketDecrease: (product: CardProductsProps) => void
    removeFromCart: (product: CardProductsProps) => void
    removeCart: () => void
}

// CartContext için varsayılan değer
const CartContext = createContext<CartContextProps | null>(null);


export type CardProductsProps = { //sill
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number,
    ingredients: string[];
    submenu: string
    category: string;
    image: string;
    isinCart: boolean
}

// Provider bileşeni
export const CartContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    const [productCartQty, setProductCartQty] = useState(0);
    const [cartProducts, setCartProducts] = useState<CardProductsProps[] | null>(null);


    useEffect(() => {
        let getItem: any = localStorage.getItem('cart')
        let getItemParse: CardProductsProps[] | null = JSON.parse(getItem)
        setCartProducts(getItemParse)
    }, [])
    
    const addToBasket = useCallback((product: CardProductsProps) => {
        const CardProductData :CardProductsProps = {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: 1,
            ingredients: product.ingredients,
            submenu: product.submenu,
            category: product.category,
            image: product.image,
            isinCart: true
        }    
        setCartProducts(prev => prev ? [...prev, CardProductData] : [CardProductData]); 
        if(cartProducts){
             let uptdatedcart = [...cartProducts]      
        localStorage.setItem('cart', JSON.stringify(uptdatedcart))
        }
       
    }, []);
    const addToBasketIncrease = useCallback((product: CardProductsProps) => {
        let uptdatedcart
        if (product.quantity == 10) {

            return toast.error('Daha fazla eklenemez')
        }
        if (cartProducts) {
            uptdatedcart = [...cartProducts]
            const existingItem = cartProducts.findIndex(item => item.id === product.id)
            if (existingItem > -1) {
                uptdatedcart[existingItem].quantity = ++uptdatedcart[existingItem].quantity
            }
            setCartProducts(uptdatedcart)
            localStorage.setItem('cart', JSON.stringify(uptdatedcart))
        }
    }, [cartProducts])
    const addToBasketDecrease = useCallback((product: CardProductsProps) => {
        let uptdatedcart
        if (product.quantity == 1) {
            
            return removeFromCart(product)
        }
        if (cartProducts) {
            uptdatedcart = [...cartProducts]
            const existingItem = cartProducts.findIndex(item => item.id === product.id)
            if (existingItem > -1) {
                uptdatedcart[existingItem].quantity = --uptdatedcart[existingItem].quantity
            }
            setCartProducts(uptdatedcart)
            localStorage.setItem('cart', JSON.stringify(uptdatedcart))
        }
    }, [cartProducts])
    const removeCart = useCallback(() => {
        setCartProducts(null)
        toast.success('Tüm ürünler sepetten çıkarıldı!')
        localStorage.setItem('cart', JSON.stringify(null))
    }, [])
    const removeFromCart = useCallback((product: CardProductsProps) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter(cart => cart.id !== product.id)
            setCartProducts(filteredProducts)
            toast.success('Ürün sepentten silindi!')
            localStorage.setItem('cart', JSON.stringify(filteredProducts))

        }

    }, [cartProducts])

    const value = {
        productCartQty,
        addToBasket,
        cartProducts,
        removeFromCart,
        removeCart,
        addToBasketIncrease,
        addToBasketDecrease
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

// useCart hook'u
const useCart = () => {
    const context = useContext(CartContext);

    if (context === null) {
        throw new Error('useCart must be used within a CartContextProvider');
    }

    return context;
};

export default useCart;

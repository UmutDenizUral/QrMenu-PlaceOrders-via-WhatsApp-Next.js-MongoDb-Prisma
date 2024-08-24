'use client'
import { createContext, useCallback, useState, useContext, ReactNode, useEffect } from 'react';
import toast from 'react-hot-toast';

interface CartContextProps {
    productCartQty: number
    cartProducts: CardProductsProps[] | null
    addToBasket: (product: CardProductsProps) => void
    addToBasketIncrease: (product: CardProductsProps) => void
    addToBasketDecrease: (product: CardProductsProps) => void
    removeFromCart: (product: CardProductsProps) => void
    removeCart: () => void
}

const CartContext = createContext<CartContextProps | null>(null);

export type CardProductsProps = {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    ingredients: string[];
    submenu: string;
    restaurant: string | undefined;
    restaurantName?: string;
    category: string;
    image: string;
    restaurantId: string;
    isinCart: boolean;
}

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [productCartQty, setProductCartQty] = useState(0);
    const [cartProducts, setCartProducts] = useState<CardProductsProps[] | null>(null);

    useEffect(() => {
        // Tarayıcıda olup olmadığını kontrol et
        if (typeof window !== 'undefined') {
            const getItem = localStorage.getItem('cart');
            const getItemParse: CardProductsProps[] | null = getItem ? JSON.parse(getItem) : null;
            setCartProducts(getItemParse);

            if (getItemParse && getItemParse.length > 0) {
                const restaurantIds = getItemParse.map(product => product.restaurantId);
                const uniqueRestaurantIds = restaurantIds.filter((id, index, self) => self.indexOf(id) === index);

                if (uniqueRestaurantIds.length > 1) {
                    toast.error("Sepetinizde farklı restoranlardan ürünler var. Lütfen tek bir restorandan ürün ekleyin.");
                }
            }
        }
    }, []);

    const addToBasket = useCallback((product: CardProductsProps) => {
        const CardProductData: CardProductsProps = {
            ...product,
            quantity: 1,
            isinCart: true
        };

        setCartProducts(prev => {
            const updatedCart = prev ? [...prev, CardProductData] : [CardProductData];
            if (typeof window !== 'undefined') {
                localStorage.setItem('cart', JSON.stringify(updatedCart));
            }
            return updatedCart;
        });
    }, []);

    const addToBasketIncrease = useCallback((product: CardProductsProps) => {
        if (product.quantity === 10) {
            return toast.error('Daha fazla eklenemez');
        }
        
        setCartProducts(prev => {
            if (prev) {
                const updatedCart = prev.map(item => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                if (typeof window !== 'undefined') {
                    localStorage.setItem('cart', JSON.stringify(updatedCart));
                }
                return updatedCart;
            }
            return prev;
        });
    }, []);

    const addToBasketDecrease = useCallback((product: CardProductsProps) => {
        if (product.quantity === 1) {
            return removeFromCart(product);
        }

        setCartProducts(prev => {
            if (prev) {
                const updatedCart = prev.map(item => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                });
                if (typeof window !== 'undefined') {
                    localStorage.setItem('cart', JSON.stringify(updatedCart));
                }
                return updatedCart;
            }
            return prev;
        });
    }, []);

    const removeCart = useCallback(() => {
        setCartProducts(null);
        toast.success('Tüm ürünler sepetten çıkarıldı!');
        if (typeof window !== 'undefined') {
            localStorage.removeItem('cart');
        }
    }, []);

    const removeFromCart = useCallback((product: CardProductsProps) => {
        setCartProducts(prev => {
            if (prev) {
                const filteredProducts = prev.filter(cart => cart.id !== product.id);
                if (typeof window !== 'undefined') {
                    localStorage.setItem('cart', JSON.stringify(filteredProducts));
                }
                toast.success('Ürün sepetten silindi!');
                return filteredProducts;
            }
            return prev;
        });
    }, []);

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

const useCart = () => {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error('useCart must be used within a CartContextProvider');
    }
    return context;
}

export default useCart;

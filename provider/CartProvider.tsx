import { CartContextProvider } from "@/hooks/useCart"
import { ReactNode } from "react"


const CartProvider = ({children}: {children:ReactNode}) => {
  return (
    <CartContextProvider>{children}</CartContextProvider>
  )
}

export default CartProvider
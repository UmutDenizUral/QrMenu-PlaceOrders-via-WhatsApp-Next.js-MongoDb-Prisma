'use client'
import useCart from "@/hooks/useCart";
import Link from "next/link";
import { MdShoppingBasket } from "react-icons/md";

const CartCount = () => {
  const {cartProducts} = useCart()
  return (
    <Link href={'/cart'}>
      <div className=" md:flex relative text-white hover:scale-110 transition-transform duration-300">
        <MdShoppingBasket size="30" />
        <div className="absolute -top-1 -right-2 w-5 h-5 flex items-center justify-center text-xs rounded-full bg-yellow-600">
          {cartProducts?.length||0} 
        </div>
      </div>
    </Link>
  );
};

export default CartCount;

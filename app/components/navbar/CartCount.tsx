'use client'
import useCart from "@/hooks/useCart";
import Link from "next/link";
import { MdShoppingBasket } from "react-icons/md";

const CartCount = () => {
  const { cartProducts } = useCart();
  return (
    <div className="sticky top-0 z-50">
      <Link href={'/cart'}>
        <div className="md:flex relative text-white hover:scale-110 transition-transform duration-300">
          <MdShoppingBasket size="30" />
          <div
            style={{ backgroundColor: 'ghostwhite' }}
            className="absolute -top-1 -right-2 w-5 border-2 border-slate-300 h-5 flex items-center justify-center text-xs rounded-full text-black"
          >
            {cartProducts?.length || 0}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CartCount;

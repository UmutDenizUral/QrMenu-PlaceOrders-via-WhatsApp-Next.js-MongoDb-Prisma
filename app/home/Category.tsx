import { products } from "@/utils/Products"
import Link from "next/link"

export const staticCategory = Array.from(
  new Set(products.map(product => product.submenu))
);
const Category = () => {
  const category = staticCategory
  return (

    <div className=" pt-2 pb-6 mt-6 relative  flex items-center   justify-center overflow-x-auto gap-3">
     
      {category.map((cat, i) => (
        <Link  key={i} href={`#${cat}`}>
          <div className=" border font-semibold text-yellow-600 rounded-full min-w-[80px] flex  justify-center cursor-pointer px-4 py-2 text-center  hover:scale-110 transition-transform duration-300">
            {cat}</div>
        </Link>
      ))}
    </div>


  )
}

export default Category

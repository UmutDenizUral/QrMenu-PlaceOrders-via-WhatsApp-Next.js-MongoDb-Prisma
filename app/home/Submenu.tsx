
import Link from "next/link"


const Submenu = ({ submenu }: any) => {
  return (

    <div className=" pt-2 pb-4 mt-4  flex items-center  overflow-x-auto gap-3">

      {submenu?.map((sub: any, i: any) => (
        <Link key={i} href={`#${sub.name}`}>
          <div style={{backgroundColor:'ghostwhite'}} className=" border font-semibold text-yellow-600 rounded-full min-w-[80px] flex  justify-center cursor-pointer px-4 py-2 text-center  hover:scale-110 transition-transform duration-300 ">
            {sub.name}</div>
        </Link>
      ))}
    </div>


  )
}

export default Submenu

import Link from "next/link"


const Logo = () => {
  return (
    <Link href={`/`}>
      <div className="flex   text-white items-center justify-center border border-md p-2 rounded-md hover:scale-110 transition-transform duration-300">
        <div className="">udulab<span className="text-sm ">.com</span> Menu</div>
  
      </div>
    </Link>
  )

}

export default Logo
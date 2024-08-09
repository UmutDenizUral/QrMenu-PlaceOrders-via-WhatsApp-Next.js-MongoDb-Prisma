import Link from "next/link"


const Logo = () => {
  return (
    <Link href={'/'}>
      <div className="flex  text-white items-center justify-center border border-md p-2 hover:border-yellow-600  rounded-md hover:text-yellow-600">
        <div className="">UDU Yemek</div>
        <span className="text-sm ">.com</span>

      </div>
    </Link>
  )

}

export default Logo
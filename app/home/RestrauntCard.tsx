import Image from 'next/image'
import Link from 'next/link'


const RestrauntCard = ({ restaurantData }: { restaurantData: any }) => {
    console.log(restaurantData)
    return (
        <Link href={`/restaurant/${restaurantData.id}`}>
            <div className='flex items-center justify-start gap-3 shadow border-b-2 p-1 w-full rounded  md:min-w-[400px] transition-all duration-300 ease-in-out hover:border-yellow-600 hover:text-yellow-700'>
                <div className='  relative h-[120px] w-[120px] '>
                    <Image
                        fill
                        src={`${restaurantData.image ? restaurantData.image :
                            "https://firebasestorage.googleapis.com/v0/b/qrmenu-7e046.appspot.com/o/images%2FMargarita%20Pizza_.jpg?alt=media&token=902894a6-ee62-46d4-ac1c-14cf96011038"}`}
                        alt='yok'
                        className='object-cover ' />
                </div>
                <div className='flex flex-col gap-2'>

                    <p className='font-bold text-lg'>{restaurantData.name}</p>
                    <p className='text-base'>{restaurantData.phone}</p>
                    <p className='text-sm'>{restaurantData.city}/{restaurantData.district}</p>

                </div>
            </div>
        </Link>
    )
}

export default RestrauntCard
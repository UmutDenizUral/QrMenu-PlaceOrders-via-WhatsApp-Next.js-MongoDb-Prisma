import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RestrauntCard = ({ restrauntData }: { restrauntData: any }) => {
    return (
        <Link href={`/restaurant/${restrauntData.id}`}>
            <div className='flex items-center justify-start gap-3 border-2 w-full   md:min-w-[400px]'>
                <div className='  relative h-[120px] w-[120px] '>
                    <Image
                        fill
                        src={"https://firebasestorage.googleapis.com/v0/b/qrmenu-7e046.appspot.com/o/images%2FMargarita%20Pizza_.jpg?alt=media&token=902894a6-ee62-46d4-ac1c-14cf96011038"}
                        alt='yok'
                        className='object-cover rounded' />
                </div> 
                <div>
                    <h2>{restrauntData.name}</h2>
                </div>
            </div>
        </Link>
    )
}

export default RestrauntCard
import React from 'react'
import Restaurants from '../restaurant/[restaurantid]/page'
import RestrauntCard from './RestrauntCard'

const AllRestraunts = (data: any) => {
    console.log(data)
    if (!data) {
        return <div>Bir hata durumu mevcut lütfen bekleyiniz</div>
    }

    return (
        <div className='mt-4 grid grid-cols-1 gap-3 w-full   '>
            {
                data.data.map((restaurant: any, id: any) =>
                    <RestrauntCard key={id} restrauntData={restaurant} />)
            }

        </div>
    )
}

export default AllRestraunts
import RestrauntCard from './RestrauntCard'

const AllRestraunts = (data: any) => {
    
    if (!data) {
        return <div>Bir hata durumu mevcut lütfen bekleyiniz</div>
    }

    return (
        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 w-full   '>
            {
                data.data.map((restaurant: any, id: any) => <RestrauntCard key={id} restaurantData={restaurant} />)
            }
        </div>
    )
}

export default AllRestraunts
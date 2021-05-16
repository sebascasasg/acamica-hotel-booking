import React from 'react'
import HotelCard from './HotelCard'

function Hotels(props) {
  const hotelsList = props.hotelsList
  return (
    <div className='container mx-auto py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
      {hotelsList.map(hotel => {
        return <HotelCard info={hotel} key={hotel.slug} />
      })}
    </div>
  )
}

export default Hotels

import React from 'react'
import HotelCard from './HotelCard'

function Hotels(props) {
  return (
    <div className='container mx-auto py-14 grid grid-cols-3 gap-20'>
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
    </div>
  )
}

export default Hotels

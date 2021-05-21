import React from 'react'

function HotelCard(props) {
  const hotelInfo = props.info
  return (
    <article className='rounded-xl overflow-hidden shadow-xl bg-gray-50'>
      <img alt='' src={hotelInfo.photo} className='rounded-xl' />
      <div className='p-5 flex flex-col'>
        <h2 className='mb-3 text-2xl font-bold'>{hotelInfo.name}</h2>
        <p className='mb-3'>{hotelInfo.description}</p>
        <div className='mb-3 flex'>
          <span className='w-8 bg-green-400 rounded-l-md'></span>
          <span className='p-1 bg-gray-200 rounded-r-md'>
            {hotelInfo.city}, {hotelInfo.country}
          </span>
        </div>
        <div className='mb-3 flex'>
          <span className='w-8 bg-green-400 rounded-l-md'></span>
          <span className='p-1 bg-gray-200 rounded-r-md'>{hotelInfo.rooms} habitaciones</span>
        </div>
        <span className='p-1 mb-3 w-min font-bold bg-green-400 rounded-md'>{'$'.repeat(hotelInfo.price)}</span>
        <button className='p-2 bg-green-400 rounded-md'>Reservar</button>
      </div>
    </article>
  )
}

export default HotelCard

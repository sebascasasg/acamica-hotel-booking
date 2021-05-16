import React from 'react'
import { data } from '../data.js'

function HotelCard(props) {
  return (
    <div className='border border-black rounded-xl overflow-hidden shadow-xl'>
      <img className='' src={data[0].photo} />
      <div className='p-5 flex flex-col'>
        <h2 className='mb-3 text-2xl font-bold'>{data[0].name}</h2>
        <p className='mb-3'>{data[0].description}</p>
        <div className='mb-3 flex'>
          <span className='w-8 bg-green-400 rounded-l-md'></span>
          <span className='p-1 bg-gray-200 rounded-r-md'>Buenos Aires, Argentina</span>
        </div>
        <div className='mb-3 flex'>
          <span className='w-8 bg-green-400 rounded-l-md'></span>
          <span className='p-1 bg-gray-200 rounded-r-md'>11 habitaciones</span>
        </div>
        <button className='p-2 bg-green-400 rounded-md'>Reservar</button>
      </div>
    </div>
  )
}

export default HotelCard

import React, { useState, useEffect } from 'react'
import Filters from './components/Filters.jsx'
import Hotels from './components/Hotels.jsx'
import { data } from './data.js'

const initFilters = {
  country: 'all',
  price: 'all',
  size: 'all',
}

function App() {
  const [hotelsList, setHotelsList] = useState(data)
  const [filters, setFilters] = useState(initFilters)

  useEffect(() => filterHotelList(filters), [filters])

  const handleFilterChange = ev => {
    const newFilters = { ...filters }
    newFilters[ev.target.name] = ev.target.value
    setFilters(newFilters)
  }

  const filterHotelList = filters => {
    let newHotelsList = data
    if (filters.country !== 'all') {
      newHotelsList = newHotelsList.filter(hotel => hotel.country === filters.country)
      console.log(newHotelsList)
    }
    if (filters.price !== 'all') {
      newHotelsList = newHotelsList.filter(hotel => hotel.price === parseInt(filters.price))
      console.log(newHotelsList)
    }
    if (filters.size !== 'all') {
      let filterFunction
      if (filters.size === 'small') {
        filterFunction = hotel => hotel.rooms <= 10
      } else if (filters.size === 'medium') {
        filterFunction = hotel => hotel.rooms > 10 && hotel.rooms <= 20
      } else if (filters.size === 'big') {
        filterFunction = hotel => hotel.rooms > 20
      }
      newHotelsList = newHotelsList.filter(filterFunction)
    }
    setHotelsList(newHotelsList)
  }

  /*   const filterByCountry = (list, country) => {
    return list.filter(item => item.country === country)
  } */

  return (
    <div>
      <header className='bg-green-700'>
        <div className='container mx-auto py-20'>
          <h1 className='mb-5 text-5xl font-bold'>Hotel Booking</h1>
          <p className='text-lg'>Búsqueda para hoteles desde el 11 de Febrero de 2020 hasta el 14 de Febrero de 2020 en Uruguay</p>
        </div>
        <Filters onFilterChange={handleFilterChange} filters={filters} />
      </header>
      <main>
        <Hotels hotelsList={hotelsList} />
      </main>
    </div>
  )
}

export default App

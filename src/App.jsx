import React, { useState, useEffect } from 'react'
import Filters from './components/Filters.jsx'
import Header from './components/Header.jsx'
import Hotels from './components/Hotels.jsx'
import { data as allHotels } from './data/data.js'

const initFilters = {
  country: 'Todos',
  price: 'Todos',
  size: 'Todos',
}

function App() {
  const [hotelsList, setHotelsList] = useState(allHotels)
  const [filters, setFilters] = useState(initFilters)

  // eslint-disable-next-line
  useEffect(() => filterHotelsList(filters), [filters])

  const handleFilterChange = ev => {
    const newFilters = { ...filters }
    newFilters[ev.target.name] = ev.target.value
    setFilters(newFilters)
  }

  const filterByCountry = (listToFilter, country) => {
    return listToFilter.filter(hotel => hotel.country === country)
  }

  const filterByPrice = (listToFilter, price) => {
    return listToFilter.filter(hotel => hotel.price === price.length)
  }

  const filterBySize = (listToFilter, size) => {
    let filterFunction
    if (size === 'Pequeño') {
      filterFunction = hotel => hotel.rooms <= 10
    } else if (size === 'Mediano') {
      filterFunction = hotel => hotel.rooms > 10 && hotel.rooms <= 20
    } else if (size === 'Grande') {
      filterFunction = hotel => hotel.rooms > 20
    }
    return listToFilter.filter(filterFunction)
  }

  const filterHotelsList = filters => {
    let newHotelsList = allHotels
    if (filters.country !== 'Todos') {
      newHotelsList = filterByCountry(newHotelsList, filters.country)
    }
    if (filters.price !== 'Todos') {
      newHotelsList = filterByPrice(newHotelsList, filters.price)
    }
    if (filters.size !== 'Todos') {
      newHotelsList = filterBySize(newHotelsList, filters.size)
    }
    setHotelsList(newHotelsList)
  }

  return (
    <>
      <Header />
      <main>
        <Filters onFilterChange={handleFilterChange} filters={filters} />
        <Hotels hotelsList={hotelsList} />
      </main>
    </>
  )
}

export default App

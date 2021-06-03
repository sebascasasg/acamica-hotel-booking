import React, { useState, useEffect } from 'react'
import Filters from './components/Filters.jsx'
import Header from './components/Header.jsx'
import Hotels from './components/Hotels.jsx'
import { data as allHotels } from './data/data.js'
import { unixToISO } from './utils/dateUtils.js'

const initFilters = {
  country: 'Todos',
  price: 'Todos',
  size: 'Todos',
  checkin: '',
  checkout: '',
}

function App() {
  const [hotelsList, setHotelsList] = useState(allHotels)
  const [filters, setFilters] = useState(initFilters)

  // eslint-disable-next-line
  useEffect(() => filterHotelsList(filters), [filters])

  const handleFilterChange = ev => {
    if (ev.target.name === 'checkin' || ev.target.name === 'checkout') {
      if (!validateDates(ev.target)) {
        return
      }
    }
    const newFilters = { ...filters }
    newFilters[ev.target.name] = ev.target.value
    setFilters(newFilters)
  }

  const validateDates = target => {
    if (target.name === 'checkin') {
      if (filters.checkout && new Date(target.value) >= new Date(filters.checkout)) {
        alert('La fecha de entrada debe ser anterior a la fecha de salida')
        return false
      } else {
        return true
      }
    } else if (target.name === 'checkout') {
      if (filters.checkin && new Date(target.value) <= new Date(filters.checkin)) {
        alert('La fecha de salida debe ser posterior a la fecha de entrada')
        return false
      } else {
        return true
      }
    }
  }

  const handleFilterClear = () => {
    setFilters(initFilters)
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

  const filterByDate = (listToFilter, checkinDateISO, checkoutDateISO) => {
    return listToFilter.filter(hotel => {
      const checkinDate = new Date(checkinDateISO),
        checkoutDate = new Date(checkoutDateISO),
        availableFromDate = new Date(unixToISO(hotel.availabilityFrom)),
        availableToDate = new Date(unixToISO(hotel.availabilityTo))
      const isCheckinDateAvailable = checkinDate >= availableFromDate
      const isCheckoutDateAvailable = checkoutDate <= availableToDate
      return isCheckinDateAvailable && isCheckoutDateAvailable
    })
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
    if (filters.checkin !== '' && filters.checkout !== '') {
      newHotelsList = filterByDate(newHotelsList, filters.checkin, filters.checkout)
    }
    setHotelsList(newHotelsList)
  }

  return (
    <>
      <Header />
      <main>
        <Filters onFilterChange={handleFilterChange} onFiltersClear={handleFilterClear} filters={filters} numberOfHotels={hotelsList.length} />
        <Hotels hotelsList={hotelsList} />
      </main>
    </>
  )
}

export default App

import React from 'react'
import CountryFilter from './CountryFilter'
import DateFilter from './DateFilter'
import PriceFilter from './PriceFilter'
import SizeFilter from './SizeFilter'

function Filters(props) {
  return (
    <div className='bg-blue-400'>
      <div className='container mx-auto py-5 flex justify-between'>
        <DateFilter />
        <DateFilter />
        <CountryFilter onFilterChange={props.onFilterChange} country={props.filters.country} />
        <PriceFilter onFilterChange={props.onFilterChange} country={props.filters.price} />
        <SizeFilter onFilterChange={props.onFilterChange} country={props.filters.size} />
      </div>
    </div>
  )
}

export default Filters

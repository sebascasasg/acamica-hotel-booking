import React from 'react'
import DateFilter from './DateFilter'
import SelectFilter from './SelectFilter'

const countryOptions = ['Todos', 'Argentina', 'Brasil', 'Chile', 'Uruguay']
const priceOptions = ['Todos', '$', '$$', '$$$', '$$$$']
const sizeOptions = ['Todos', 'Pequeño', 'Mediano', 'Grande']

function Filters(props) {
  return (
    <header className='bg-blue-400'>
      <div className='container mx-auto py-5'>
        <p className='text-lg'>Búsqueda para hoteles desde el 11 de Febrero de 2020 hasta el 14 de Febrero de 2020 en {props.filters.country}</p>
        <div className='flex justify-between'>
          <DateFilter />
          <DateFilter />
          <SelectFilter name='country' options={countryOptions} value={props.filters.country} onFilterChange={props.onFilterChange} />
          <SelectFilter name='price' options={priceOptions} value={props.filters.price} onFilterChange={props.onFilterChange} />
          <SelectFilter name='size' options={sizeOptions} value={props.filters.size} onFilterChange={props.onFilterChange} />
        </div>
      </div>
    </header>
  )
}

export default Filters

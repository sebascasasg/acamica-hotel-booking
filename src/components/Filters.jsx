import React from 'react'
import DateFilter from './DateFilter'
import SelectFilter from './SelectFilter'

const countryOptions = ['Todos', 'Argentina', 'Brasil', 'Chile', 'Uruguay']
const priceOptions = ['Todos', '$', '$$', '$$$', '$$$$']
const sizeOptions = ['Todos', 'Pequeño', 'Mediano', 'Grande']

function Filters(props) {
  return (
    <header>
      <div className='container mx-auto my-5 px-10 py-12 bg-green-800 rounded-3xl'>
        <p className='mb-10 text-xl text-yellow-50'>Este es el espacio para el mensaje que aún no he hecho 😔</p>
        <div className='flex justify-between'>
          <DateFilter />
          <DateFilter />
          <SelectFilter label='País: ' name='country' options={countryOptions} value={props.filters.country} onFilterChange={props.onFilterChange} />
          <SelectFilter label='Precio: ' name='price' options={priceOptions} value={props.filters.price} onFilterChange={props.onFilterChange} />
          <SelectFilter label='Tamaño: ' name='size' options={sizeOptions} value={props.filters.size} onFilterChange={props.onFilterChange} />
        </div>
      </div>
    </header>
  )
}

export default Filters

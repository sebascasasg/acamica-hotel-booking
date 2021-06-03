import React from 'react'
import DateFilter from './DateFilter'
import SelectFilter from './SelectFilter'
import { formatDateToLanguage } from '../utils/dateUtils'

const countryOptions = ['Todos', 'Argentina', 'Brasil', 'Chile', 'Uruguay']
const priceOptions = ['Todos', '$', '$$', '$$$', '$$$$']
const sizeOptions = ['Todos', 'Pequeño', 'Mediano', 'Grande']

function Filters(props) {
  return (
    <header>
      <div className='container mx-auto my-5 px-10 py-12 bg-blue-900 rounded-3xl'>
        <p className='mb-10 text-xl text-yellow-50'>
          {`Hay ${props.numberOfHotels === 1 ? 'disponible ' + props.numberOfHotels + ' hotel ' : 'disponibles ' + props.numberOfHotels + ' hoteles '}
          ${
            props.filters.size === 'Todos'
              ? ''
              : props.filters.size === 'Pequeño'
              ? props.numberOfHotels === 1
                ? 'pequeño '
                : 'pequeños '
              : props.filters.size === 'Mediano'
              ? props.numberOfHotels === 1
                ? 'mediano '
                : 'medianos '
              : props.numberOfHotels === 1
              ? 'grande '
              : 'grandes '
          }
          ${props.filters.price === 'Todos' ? '' : 'con precio ' + props.filters.price}
          ${props.filters.checkin && props.filters.checkout ? 'desde el ' + formatDateToLanguage(props.filters.checkin) + ' hasta el ' + formatDateToLanguage(props.filters.checkout) : ''}
          ${props.filters.country === 'Todos' ? '' : 'en ' + props.filters.country}`}
        </p>
        <div className='flex justify-between'>
          <DateFilter label='Entrada: ' name='checkin' value={props.filters.checkin} onFilterChange={props.onFilterChange} />
          <DateFilter label='Salida: ' name='checkout' value={props.filters.checkout} onFilterChange={props.onFilterChange} />
          <SelectFilter label='País: ' name='country' options={countryOptions} value={props.filters.country} onFilterChange={props.onFilterChange} />
          <SelectFilter label='Precio: ' name='price' options={priceOptions} value={props.filters.price} onFilterChange={props.onFilterChange} />
          <SelectFilter label='Tamaño: ' name='size' options={sizeOptions} value={props.filters.size} onFilterChange={props.onFilterChange} />
        </div>
        <button className='w-1/3 mx-auto mt-10 px-2 py-1 block object-center rounded-md bg-yellow-50 font-bold text-blue-900' onClick={props.onFiltersClear}>
          Limpiar filtros
        </button>
      </div>
    </header>
  )
}

export default Filters

import React from 'react'

function PriceFilter(props) {
  return (
    <select name='price'>
      <option value='all'>Cualquier precio</option>
      <option value='price-1'>$</option>
      <option value='price-2'>$$</option>
      <option value='price-3'>$$$</option>
      <option value='price-4'>$$$$</option>
    </select>
  )
}

export default PriceFilter

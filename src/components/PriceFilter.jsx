import React from 'react'

function PriceFilter(props) {
  return (
    <select name='price' value={props.price} onChange={props.onFilterChange}>
      <option value='all'>Cualquier precio</option>
      <option value='1'>$</option>
      <option value='2'>$$</option>
      <option value='3'>$$$</option>
      <option value='4'>$$$$</option>
    </select>
  )
}

export default PriceFilter

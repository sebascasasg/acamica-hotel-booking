import React from 'react'

function CountryFilter(props) {
  return (
    <select name='country' value={props.country} onChange={props.onFilterChange}>
      <option value='all'>Todos los países</option>
      <option value='Argentina'>Argentina</option>
      <option value='Brasil'>Brasil</option>
      <option value='Chile'>Chile</option>
      <option value='Uruguay'>Uruguay</option>
    </select>
  )
}

export default CountryFilter

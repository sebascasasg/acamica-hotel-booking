import React from 'react'

function CountryFilter(props) {
  return (
    <select name='country'>
      <option value='all'>Todos los países</option>
      <option value='argentina'>Argentina</option>
      <option value='brasil'>Brasil</option>
      <option value='chile'>Chile</option>
      <option value='uruguay'>Uruguay</option>
    </select>
  )
}

export default CountryFilter

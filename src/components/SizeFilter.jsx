import React from 'react'

function SizeFilter(props) {
  return (
    <select name='size'>
      <option value='all'>Cualquier tamaño</option>
      <option value='small'>Pequeño</option>
      <option value='medium'>Mediano</option>
      <option value='big'>Grande</option>
    </select>
  )
}

export default SizeFilter

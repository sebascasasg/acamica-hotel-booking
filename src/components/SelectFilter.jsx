import React from 'react'

function SelectFilter(props) {
  return (
    <div className='flex'>
      <label htmlFor={props.name}>
        <h3 className='mr-3 font-bold text-yellow-50'>{props.label}</h3>
      </label>
      <select name={props.name} value={props.value} onChange={props.onFilterChange}>
        {props.options.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectFilter

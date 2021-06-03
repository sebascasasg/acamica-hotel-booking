import React from 'react'

function DateFilter(props) {
  return (
    <div className='flex items-center'>
      <label htmlFor={props.name}>
        <h3 className='mr-3 font-bold text-yellow-50'>{props.label}</h3>
      </label>
      <input className='px-2 py-1 rounded-md bg-yellow-50 font-bold text-blue-900' type='date' name={props.name} value={props.value} onChange={props.onFilterChange} />
    </div>
  )
}

export default DateFilter

import React from 'react'

function SelectFilter(props) {
  return (
    <select name={props.name} value={props.value} onChange={props.onFilterChange}>
      {props.options.map(option => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        )
      })}
    </select>
  )
}

export default SelectFilter

import React from 'react'

const Filter = ({ filter, filterChange, filterText }) => {
  return (
    <div>
      <input
        value={filter}
        onChange={filterChange}
        placeholder='Search Card Name'
      />
    </div>
  )
}

export default Filter
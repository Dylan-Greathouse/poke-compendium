import React from 'react'

export const SearchForm = ({handleSubmit}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
            
        <label>Search for some Pokemon</label>
        <input type='text' />
        <h3>Filter Pokemon &#129055;</h3>
        <select>
          <option value='all'>All</option>
        </select>
        <button >submit</button>
      </form>
    </div>
  )
}
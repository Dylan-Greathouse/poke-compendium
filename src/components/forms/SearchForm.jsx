import React from 'react'

export const SearchForm = ({handleSubmit, handleNameChange, name, types}) => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
            
        <label>Search for some Pokemon</label>
        <input type='text' value={name} onChange={handleNameChange} />


        <h3>Filter Pokemon &#129055;</h3>
        <select>
          <option value='all'>All</option>
          {types.map((item) => {
            return (
              <option key={item} value={item}>{item}</option>
            )
          }) }
        </select>
        <button >submit</button>
      </form>
    </div>
  )
}
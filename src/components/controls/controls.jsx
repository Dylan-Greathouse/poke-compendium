import React from 'react'
import { SearchForm } from '../forms/SearchForm';

export const Controls = ({  
    name,
    handleSubmit,
    handleNameChange,
    types,
    filterChange,
    selectedType, 
}) => {
    return (
        <div className="controlsContainer">
          <SearchForm  
            name={name} 
            types={types} 
            filterChange={filterChange} 
            selectedType={selectedType} 
            handleSubmit={handleSubmit} 
            handleNameChange={handleNameChange} 
          />
        </div>
      )
    }
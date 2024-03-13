import React from 'react'
import './Restaurant.css'

const SearchBar = () => {
  return (
    <div className='searchBar'>
        <div className="searchInput">
          <input type="search" placeholder='Search restaurants...' />
        </div>
        <div className="ratingInput">
          <input type="number" />
        </div>
    </div>
  )
}

export default SearchBar
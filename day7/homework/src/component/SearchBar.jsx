import React from 'react'
import './Restaurant.css'

const SearchBar = ({data}) => {
  function filterData(name) {
    let filterData  = data.filter((item)=>{
        if(item.name.toLowerCase().include(item.name)){
            console.log(item.name)
        }
        
    })
  }
  return (
    <div className='searchBar'>
        <div className="searchInput">
          <input type="search" name='search' placeholder='Search restaurants...' onChange={(e) => {filterData(e.target.value)}} />
        </div>
        <div className="ratingInput">
          <input type="number" />
        </div>
    </div>
  )
}

export default SearchBar
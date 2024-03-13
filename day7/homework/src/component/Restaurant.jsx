import React from 'react'
import RestaurantCard from './RestaurantCard'
import SearchBar from './SearchBar'
import PageNav from './PageNav'

const Restaurant = () => {
  //list data in array format
  
  //create and pass props
  //all the logic here
  return (
    <div>
        <SearchBar/>
        <RestaurantCard/>
        <PageNav/>
    </div>
  )
}

export default Restaurant
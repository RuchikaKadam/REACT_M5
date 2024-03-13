import React, { useState } from "react";
import "./Restaurant.css";
// import RestaurantCard from './RestaurantCard'
// import SearchBar from './SearchBar'
// import PageNav from './PageNav'
import { data } from "../Data";

const Restaurant = () => {
  //filter the data for searchbar
  function filterData(name) {
    let filterData = data.filter((item) => {
      if (item.name.toLowerCase().includes(name.trim())) {
        console.log(item.name);
        return true;
      }
      return false;
    });
    setFood(filterData);
  }

  //function to update list with ratings
  function updateRating(e) {}
  //updating ui dynamically using state
  const [food, setFood] = useState(data);

  return (
    <div>
      {/* <SearchBar data={data}/> */}

      <div className="searchBar">
        <div className="searchInput">
          <input
            type="search"
            name="search"
            placeholder="Search restaurants..."
            onChange={(e) => {
              filterData(e.target.value);
            }}
          />
        </div>
        <div className="ratingInput">
          <p>Minimum Rating..</p>
          <input type="number" name="rating" onChange={updateRating} />
        </div>
      </div>

      {/* <div className="allCards"> <RestaurantCard data={data}/></div> */}

      <div>
        {food.map((item) => {
          return (
            <div key={item._id.$oid} className="oneCard">
              <h5>{item.name}</h5>
              <p>{item.address}</p>
              <p>Food: {item.type_of_food}</p>
              <p>Rating: {item.rating}</p>
            </div>
          );
        })}
      </div>

      {/* <PageNav/> */}
    </div>
  );
};

export default Restaurant;

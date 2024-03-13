import React from 'react'
import './Restaurant.css'

const RestuarntCard = ({data}) => {
  return (
    <>
      {data.map((item)=>{
        return (
          <div key={item._id.$oid} className='oneCard'>
            <h5>{item.name}</h5>
            <p>{item.address}</p>
            <p>Food: {item.type_of_food}</p>
            <p>Rating: {item.rating}</p>
          </div>
        )
      })}
    </>
  )
}

export default RestuarntCard
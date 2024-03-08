import React, { useState } from 'react'
import './CourseCard.css'

const CourseCard = ({name, hour, key}) => {
    const [hourval, updateHourval] = useState(hour);
  return (
    <>
        <div className='coursecontainer'
    key={key}>
        <p>{name}</p>
        <p>{hourval}</p>
        <div>
            <button onClick={()=>{updateHourval(hourval+1)}}>+</button>
            <button onClick={()=>{updateHourval(hourval-1)}}>-</button>
        </div>

    </div>
    </>
  )
}
export default CourseCard;
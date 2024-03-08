import React, { useState } from 'react'

const CourseCard = ({name, hour, key}) => {
    const [hourval, updateHourval] = useState(hour);
  return (
    <>
        <div style={{
        display:'inline-block',
        padding:'10px',
        margin:'10px'
    }} 
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
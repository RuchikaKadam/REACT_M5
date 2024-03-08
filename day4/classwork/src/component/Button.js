import React from 'react'
import './Button.css'

export const Button = (props) => {
  return (
    <button 
        style={{
            color : props.fontColor,
            backgroundColor : props.backgroundColor,
            borderRadius : props.borderRadius,
            padding: "9px 1rem"
        }}
        className='button'
    >
        {props.children}
    </button>
  )
}
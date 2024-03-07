import React from 'react'
import './Button.css'

export const Button = (props) => {
  return (
    <button 
        style={{
            color : props.fontColor,
            backgroundColor : props.backgroundColor,
            borderRadius : props.borderRadius
        }}
        className='button'
    >
        {props.children}
    </button>
  )
}
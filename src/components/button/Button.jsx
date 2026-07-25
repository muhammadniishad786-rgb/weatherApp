import React from 'react'
import "./Button.css"

function Button({text, className, onClick, type}) {
  return (
      <button className={`btn ${className}`} onClick={onClick} type={type} >{text}</button>
  )
}

export default Button

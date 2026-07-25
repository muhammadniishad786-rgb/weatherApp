import React from 'react'
import './Input.css'

function Input({type, placeholder, value, onkeydown, onChange}) {
  return (
    <input  type={type}
            placeholder={placeholder}
            value={value}
            onKeyDown={onkeydown}
            onChange={onChange}  />
  )
}

export default Input

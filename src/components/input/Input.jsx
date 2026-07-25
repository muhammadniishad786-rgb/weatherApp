import React from 'react'
import './Input.css'

function Input({type, placeholder, value, onkeydown, onChange, className}) {
  return (
    <input  type={type}
            placeholder={placeholder}
            value={value}
            onKeyDown={onkeydown}
            onChange={onChange}
            className={`input ${className}`}
            />
  )
}

export default Input

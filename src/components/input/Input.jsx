import React from 'react'
import './Input.css'

function Input({type, placeholder, value, name, onkeydown, onChange, className}) {
  return (
    <input  type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onKeyDown={onkeydown}
            onChange={onChange}
            className={`input ${className}`}
            />
  )
}

export default Input

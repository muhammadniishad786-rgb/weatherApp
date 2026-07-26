import React from 'react'
import './Input.css'

function Input({type, placeholder, value, name, onkeydown, onChange, className, ...rest}) {
  return (
    <input  type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onKeyDown={onkeydown}
            onChange={onChange}
            className={`input ${className}`}
            {...rest}
            />
  )
}

export default Input

// ...rest copies all the remaining properties into a new object.

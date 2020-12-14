import React from 'react';

import './style.css';

interface PropsInput {
  label?: string,
  type: string,
  name: string,
  value?: any,
  disabled?: boolean,
  handleChange?: any,
  placeholder?: string
}

export const Input = ({label, type, name, value, disabled, handleChange, placeholder}: PropsInput) => {
  return (
    <div className="form__input">
      <label htmlFor={name}>{label}</label>
      <input 
        type={type} 
        name={name} 
        id={name} 
        value={value} 
        disabled={disabled} 
        onChange={handleChange} 
        placeholder={placeholder}
        min="0"
        required
      />
    </div>
  )
}

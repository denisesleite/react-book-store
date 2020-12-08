import React from 'react';

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
    <div className="input-form">
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

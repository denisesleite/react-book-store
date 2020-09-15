import React from 'react';

export default function Input({label, type, name, value, disabled, handleChange, placeholder}: any) {
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
        required
      />
    </div>
  )
}

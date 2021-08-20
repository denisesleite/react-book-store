import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core'

import { InputWrapper } from './Input.styles';

interface InputProps {
  name: string,
  type?: string,
  label?: string,
  value?: string | number,
  disabled?: boolean,
  placeholder?: string
}

export const Input = ({ name, type, label, value, ...rest }: InputProps) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <InputWrapper>
      <label htmlFor={fieldName}>{label}</label>

      <input
        id={fieldName}
        type={type || 'text'}
        ref={inputRef}
        defaultValue={value || defaultValue}
        {...rest}
      />
    </InputWrapper>
  )
}
import React from 'react'
import InputStyle from './InputStyle'

const Input = ({ value, name, onChange, label, ...props }) => {
  return (
    <InputStyle>
      <input
        value={value}
        name={name}
        onChange={onChange}
        {...props}
      />
    </InputStyle>
  )
}

export default Input

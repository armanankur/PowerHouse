import React from 'react'
import styled from "./InputField.module.css"
const InputField = (props) => {
    const {type,name,placeholder,onChange,value}=props
  return (
    <div className={styled.inputFieldContainer}>
        <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  )
}

export default InputField
import React from 'react'
import styled from "./Button.module.css"
const Button = (props) => {
    const {btnName,onClick}=props

  return (
    <div className={styled.btnContainer}>
        <button type='submit' onClick={onClick}>{btnName}</button>
    </div>
  )
}

export default Button
import React from 'react'
import './Button.scss'

const Button = ({type, buttonText = "this is a button", buttonClass, onClick}) => {
    return (
        <button type={type} className={`button ${buttonClass}`}>
          {buttonText}
        </button>
    )
}

export default Button
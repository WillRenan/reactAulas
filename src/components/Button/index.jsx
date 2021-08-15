import React from 'react'
import './index.css'


const Button = (props) =>{
  const {name,onClick}= props;
  return(
    <button onClick={onClick}>
      {name}
    </button>
  )
}
export default Button;
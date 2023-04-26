import React from 'react'
import "../App.css"

const CartWidget = (props) => {
  return (
    <p className='cart'>{props.cantidad}🛒</p>
  )
}

export default CartWidget

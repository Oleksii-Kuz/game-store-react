import React from 'react'
import './cart-block.css'
import { BiCartAlt } from 'react-icons/bi'

export const CartBlock = () => {
  return (
    <div className='cart-block'>
      <BiCartAlt size={25} className="cart-icon" />
      <span className='cart-price'>210 $</span>
    </div>
  )
}

export default CartBlock
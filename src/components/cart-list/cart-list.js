import React from 'react'
import './cart-list.css'

export const CartListItem = ({title, price, id}) => {
  return (
    <div className='cart-item'>
      <span>{ title }</span>
      <span className='cart-item__price'>{price} $</span>
    </div>
  )
}

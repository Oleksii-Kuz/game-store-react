import React from 'react'
import { Button } from '../Button'
import { CartListItem } from '../cart-list/cart-list'
import { calcTotalPrice } from '../utils'
import './cart-menu.css'

export const CartMenu = ({items, onClick}) => {
  return (
    <div className='cart-menu'>
      <div className='cart-menu__list'></div>
      {items.length > 0 ?
        items.map(item => <CartListItem key={item.title} title={item.title} price={item.price} id={item.id} />) :
        <span>Cart is empty</span>
      }
      {
        items.length > 0 ? 
        <div>
          <div className='cart-menu__arrange'>
            <span>Total:</span>
            <span className='cart-menu__total-price'>$ {calcTotalPrice(items)}</span>
          </div>
          <Button
            type="primary"
            size='m'
            onClick={onClick}
          >
            Buy games
          </Button>
        </div> :
        null
      }
    </div>
  )
}

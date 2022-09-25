import React, { useCallback, useState } from 'react'
import './cart-block.css'
import { BiCartAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { CartMenu } from '../cart-menu'
import { ItemsCounter } from '../items-counter'
import { calcTotalPrice } from '../utils'
import { useNavigate } from 'react-router-dom'

export const CartBlock = () => {
  const items = useSelector(state => state.cart.itemsInCart)
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
  const totalPrice = calcTotalPrice(items)
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false)
    navigate('/order')
  }, [navigate])
  
  return (
    <div className='cart-block'>
      <ItemsCounter quantity={items.length} />
      <BiCartAlt 
        size={25}
        className="cart-icon" 
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className='cart-price'>{totalPrice} $</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  )
}

export default CartBlock
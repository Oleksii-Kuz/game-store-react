import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../redux/cart/reducer'
import './order-item.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export const OrderItem = ({game}) => {
  const dispatch = useDispatch()
  const deleteItem = () => {
    dispatch( deleteItemFromCart(game.id) )
  }
  return (
    <div className='order-item'>
      <div className='order-item__cover'>
        <div className='game-item__cover' style={{ backgroundImage: `url(${game.image})` }} />
      </div>
      <div className='order-item__title'>
        <span>{game.title}</span>
      </div>
      <div className='order-item__price'>
        <span>{game.price} $</span>
        < AiOutlineCloseCircle
          size={25}
          className="order-item__delete"
          onClick={deleteItem}
        />
      </div>
    </div>
  )
}

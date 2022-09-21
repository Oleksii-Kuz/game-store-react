import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'
import { Button } from '../Button'
import './game-item.css'

export const GameItem = ({game}) => {
  const {image, title, genres, price, id, description} = game

  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.itemsInCart)
  const isItemInCart = items.some(item => item.id === game.id)

  const handleClick = (e) => {
    e.stopPropagation()
    if(isItemInCart) {
      dispatch(deleteItemFromCart(game.id))
    } else {
      dispatch(setItemInCart(game))
    }
  }
  return (
    <div className='game-item'>
      <div className='game-item__cover' style={{ backgroundImage: `url(${image})` }} />
      <div className='game-item__wrapper'>
        <div className='game-item__title'>
          {title}
        </div>
        <div className='game-item__genres'>
          {genres.map(genre => <span key={genre}>{genre}</span>)}
        </div>
        <div className='game-item__description'>
          {description}
        </div>
        <div className='game-item__buy'>
          <span>$ {price}</span>
          <Button 
            type={isItemInCart ? 'secondary' : 'primary'}
            size="m"
            onClick={handleClick}
          >
            { isItemInCart ? 'Delete' : 'Add' }
          </Button>
        </div>
      </div>
    </div>
  )
}

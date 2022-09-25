import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'
import { setCurrentGame } from '../../redux/games/reducer'
import { Button } from '../Button'
import './game-item.css'

export const GameItem = ({game}) => {
  const {image, title, genres, price, description} = game

  const dispatch = useDispatch()
  const navigate = useNavigate()
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

  const gameClick = () => {
    dispatch(setCurrentGame(game))
    navigate(`/app/${game.title}`)
  }

  return (
    <div className='game-item' onClick={gameClick}>
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

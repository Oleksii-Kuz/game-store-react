import React from 'react'
import { Button } from '../Button'
import './game-item.css'

export const GameItem = ({game}) => {
  const {image, title, genres, price, id, description} = game
  return (
    <div className='game-item'>
      <div className='game-item__cover' style={{ backgroundImage: `url(${image})` }} />
      <div className='game-item__wrapper'>
        <div className='game-item__title'>
          {title}
        </div>
        <div className='game-item__genres'>
          {genres.map(genre => <span>{genre}</span>)}
        </div>
        <div className='game-item__description'>
          {description}
        </div>
        <div className='game-item__buy'>
          <span>$ {price}</span>
          <Button type="primary">Добавить</Button>
        </div>
      </div>
    </div>
  )
}

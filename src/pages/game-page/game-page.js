import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../../components/Button'
import './game-page.css'

export const GamePage = () => {
  const game = useSelector(state => state.games.currentGame)

  if (!game) return null

  return (
    <div className='game-page'>
      <h1 className='game-page__title'>
        {game.title}
      </h1>
      <div className='game-page__content'>
        <div className='game-page__left'>
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="Youtube video player"
          ></iframe>
        </div>
        <div className='game-page__right'>
        <div className='game-item__cover' style={{ backgroundImage: `url(${game.image})` }} />
        <p>{game.description}</p>
        <div className='game-item__genres'>
          {game.genres.map(genre => <span key={genre}>{genre}</span>)}
        </div>
        <div className='game-item__buy'>
          <span>$ {game.price}</span>
          {/* <Button 
            type={isItemInCart ? 'secondary' : 'primary'}
            size="m"
            onClick={handleClick}
          >
            { isItemInCart ? 'Delete' : 'Add' }
          </Button> */}
        </div>
        </div>
      </div>
    </div>
  )
}

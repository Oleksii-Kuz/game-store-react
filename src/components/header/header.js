import React from 'react'
import { Link } from 'react-router-dom'
import { CartBlock } from '../cart-block'
import './header.css'

export const Header = () => {
  return (
    <header className='header'>
      <div className='wrapper'>
        <Link to="/" className='header-title'>
          Game Store
        </Link>
        <div className='header-card'>
          <CartBlock />
        </div>
      </div>
    </header>
  )
}
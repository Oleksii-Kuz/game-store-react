import React from 'react'
import './items-counter.css'

export const ItemsCounter = ({quantity = 0}) => {
  return quantity > 0 ? (
      <div className='counter'>{quantity}</div>
    ) : null
}

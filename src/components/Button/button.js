import classNames from 'classnames'
import React from 'react'
import './button.css'

export const Button = ({
  children,
  onClick,
  type,
  size = 'l',
}) => {
  const btnClass = classNames({
    'btn' : true,
    'btn--secondary' : type === 'secondary',
    'btn--primary' : type === 'primary',
    'btn--small' : size === 's',
    'btn--medium' : size === 'm',
  })
  return (
    <button className={btnClass} onClick={onClick}>{ children }</button>
  )
}

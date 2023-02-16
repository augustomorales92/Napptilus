import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const ShoppingCart = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  )
}

export const ArrowLeft = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  )
}

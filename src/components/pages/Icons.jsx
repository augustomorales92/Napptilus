import React from 'react'
import {
  FontAwesomeIcon,
  faShoppingCart,
  faArrowLeft
} from '@fortawesome/react-fontawesome'

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

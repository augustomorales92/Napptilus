import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid'
import { faArrowLeft } from '@fortawesome/fontawesome-free-solid'

export const ShoppingCart = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} />
        </div>
    );
};

export const ArrowLeft = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faArrowLeft} />

        </div>
    )
}
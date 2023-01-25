import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import { ShoppingCart } from '../pages/Icons';
import { useNavigate } from 'react-router-dom'
import usePersistentCart from '../../hooks/UsePersistCart'

const Header = () => {
    const navigate = useNavigate()
    const [value] = usePersistentCart('cart-items');


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-light d-flex justify-content-around" >
            <div className="container navbar-container">
                <div className='d-flex flex-column'>
                    <div className="navbar-brand" onClick={() => navigate('/')}>
                        <img src="https://spokephone.com/wp-content/uploads/2020/08/spoke_phone_horizontal_logo_2x.png" alt="Logo" width="auto" height="40" className="d-inline-block align-text-top" />
                    </div>
                    <div className="navbar-text d-inline-block Breadcrumbs-height" >
                        <Breadcrumbs />
                    </div>
                </div>
                <div className="btn btn-dark position-relative">
                    <ShoppingCart />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {typeof value !== 'number' ? 0 : value}
                        <span className="visually-hidden">cart</span>
                    </span>
                </div>
            </div>
        </nav>
    )
};

export default Header;
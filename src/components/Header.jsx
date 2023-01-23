import React from 'react';
import Breadcrumbs from '../utils/Breadcrumbs';
import { useNavigate } from 'react-router-dom'
import usePersistentCart from '../hooks/UsePersistCart'

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="100%" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {value}
                        <span className="visually-hidden">cart</span>
                    </span>
                </div>
            </div>
        </nav>
    )
};

export default Header;
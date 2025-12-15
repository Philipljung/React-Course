import { NavLink, useNavigate } from 'react-router';
import "./header.css";
import LogoWhite from '../assets/images/logo-white.png';
import MobileLogo from '../assets/images/mobile-logo.png';
import SearchIcon from '../assets/images/icons/search-icon.png';
import CartIcon from '../assets/images/icons/cart-icon.png';
import { useState } from 'react';

export function Header({ cart = [] }) {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    let totalQuantity = 0;

    cart.forEach(( cartItem ) => {
        totalQuantity += cartItem.quantity;
    });

    const searchInput = (event) => {
        setSearch(event.target.value);
        console.log(search);
    };

    const searchBtn = () => {
        navigate(`/?search=${search}`)
    }

    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo"
                        src={LogoWhite} />
                    <img className="mobile-logo"
                        src={MobileLogo} />
                </NavLink>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" 
                onChange={searchInput}
                />

                <button className="search-button"
                onClick={searchBtn}
                >
                    <img className="search-icon" src={SearchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={CartIcon} />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>
    );
}
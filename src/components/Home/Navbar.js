import React from 'react'
import   './Navbar.css';
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
           <h2><Link to="/user/product">
                        Shop
                    </Link></h2> 
             </div>
            <ul className="navbar__links">
                 <li>
                    <Link to="/user/cart" className="cart__link">
                        <span>
                        <i className="fas fa-shopping-cart"></i>
                        Cart
                        <span className="cartlogo_badge">0</span>
                        </span>
                        </Link>
               </li>
               <li>
                    <Link to="/user/login">
                        Login
                    </Link>
                 </li>
            </ul>
        </nav>
    )
}
export default Navbar
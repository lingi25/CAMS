import React from 'react';
import { Link } from 'react-router-dom'
import './Navi.css';
import logo from '../assets/all-images/logo bg removed (2).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../routers/CartContext'; 

function Navigation(){
  const { getCartCount } = useCart();
  return (
    <nav className="container nav">
    <div className="logo">
    <Link to="/home" className="d-flex align-items-center gap-2">
        <img src={logo} alt="NXTLVL Automotives" />
      </Link>
    </div>
    <ul>
      <li>
        <Link to="/" className="selected">
          Home
        </Link>
      </li>
      
      <li>
        <Link to="/AboutUs">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/Service">Service</Link>
      </li> 
      {/* <li>
        <Link to="/Login">Login</Link>
      </li> */}
      
    </ul>
    <div className="icon-link">
    <Link to="/Cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                {getCartCount() > 0 && (
                    <span className="cart-count">{getCartCount()}</span>
                )}
            </Link>
      </div>
   
  </nav>
    
  );
}

export default Navigation;
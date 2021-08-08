import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
   return (
      <div className='container-nav'>
         <nav className='navbar navbar-md'>
            <Link className='navbar-brand navbar-link nav-item-link' to='/'>
               Flipkart
            </Link>
            <ul className='nav-items'>
               <li className='nav-item navbar-link'>
                  <Link to='/' className='nav-item-link'>
                     Products
                  </Link>
               </li>
            </ul>

            <ul className='nav-items'>
               <li className='nav-item navbar-link'>
                  <Link to='/wishlist' className='nav-item-link'>
                     <i className='fas fa-heart'></i>
                  </Link>
               </li>
               <li className='nav-item navbar-link'>
                  <Link to='/cart' className='nav-item-link'>
                     <i className='fas fa-shopping-cart'></i>
                  </Link>
               </li>
            </ul>
         </nav>
      </div>
   );
}

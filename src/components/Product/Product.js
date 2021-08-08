import React from 'react';
import { useData } from '../../context/DataContext';
import './Product.css';

export default function Product({ product }) {
   const { state, dispatch } = useData();
   const { cart } = state;

   const checkCart = () => cart.filter((item) => item.id === product.id);

   const handleAddToCart = (product) => {
      if (checkCart.length === 0) {
         return dispatch({ type: 'ADD_CART_ITEM', payload: product });
      } else {
         return dispatch({ type: 'INC_QUANTITY', payload: product });
      }
   };

   return (
      <>
         <div className='card product product-card'>
            <div className='product-image'>
               <img className='card-img' src={product.image} alt='' />
            </div>
            <div className='product-details'>
               <h3 className='product-heading'>{product.name}</h3>
               <div className='rating'>
                  <span>
                     <i className='fas fa-star'></i>
                  </span>
                  <span>
                     <strong>{product.ratings}</strong>/5.0
                  </span>
               </div>
            </div>
            <div className='product-details'>
               <div className='product-price'>
                  <p className='new-price'>₹{product.price}</p>
               </div>
               <div className='product-cart-button'>
                  <button
                     onClick={() => handleAddToCart(product)}
                     className='btn btn-primary product-cart-btn'>
                     Add to Cart
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}

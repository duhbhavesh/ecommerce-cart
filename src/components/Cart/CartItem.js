import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';
import './CartItem.css';

export const CartItem = ({ product, quantity }) => {
   const { dispatch } = useData();
   const { image, name, brand, price, id } = product;

   const handleIncrementQty = (product) => {
      return dispatch({ type: 'INC_QUANTITY', payload: product });
   };

   const handleDecrementQty = (product) => {
      return dispatch({ type: 'DEC_QUANTITY', payload: product });
   };

   const handleMoveToWishlist = (product) => {
      dispatch({ type: 'ADD_WISHLIST_ITEM', payload: product });
      dispatch({ type: 'REMOVE_CART_ITEM', payload: product });
   };

   const handleRemoveCartItem = (product) => {
      return dispatch({ type: 'REMOVE_CART_ITEM', payload: product });
   };

   return (
      <>
         <div className='cart-item'>
            <figure className='cart-item-figure'>
               <img className='cart-image' alt='' src={image} />
            </figure>
            <div className='cart-item-details'>
               <Link to={`/product/${id}`} className='cart-item-title'>
                  {name}
               </Link>
               <div className='cart-item-brand'>Brand - {brand}</div>
               <div className='cart-item-quantity'>
                  <button
                     onClick={() => handleDecrementQty(product)}
                     disabled={quantity < 1}
                     className='btn btn-square cart-item-quantity-dec'>
                     -
                  </button>
                  <span className='cart-item-qty'>{quantity}</span>
                  <button
                     onClick={() => handleIncrementQty(product)}
                     className='btn btn-square cart-item-quantity-inc'>
                     +
                  </button>
               </div>
               <button
                  onClick={() => handleRemoveCartItem(product)}
                  className='btn btn-secondary cart-item-btn'>
                  Remove
               </button>
               <button
                  onClick={() => handleMoveToWishlist(product)}
                  className='btn btn-secondary cart-item-btn'>
                  Save To Wishlist
               </button>
            </div>
            <div className='cart-item-subtotal'>
               ₹<span>{(quantity * price).toLocaleString()}</span>
            </div>
         </div>
      </>
   );
};

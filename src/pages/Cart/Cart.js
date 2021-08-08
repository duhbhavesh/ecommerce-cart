import React from 'react';
import { CartItem } from '../../components/Cart/CartItem';
import { CartSummary } from '../../components/Cart/CartSummary';
import { useData } from '../../context/DataContext';
import './Cart.css';

export default function Cart() {
   const { state } = useData();
   const { cart } = state;

   return (
      <>
         <h1 className='cart-heading'>Cart</h1>
         {cart?.length === 0 ? (
            <h3 className='cart-info'>Cart is Empty</h3>
         ) : (
            <div className='wrapper-cart'>
               <div className='wrapper-cart-details'>
                  <div className='cart-item-length'>
                     My Cart ({cart.length} items)
                  </div>
                  {cart.map((product) => {
                     return (
                        <CartItem
                           key={product.id}
                           product={product}
                           quantity={product.quantity}
                        />
                     );
                  })}
               </div>
               <div className='wrapper-cart-summary'>
                  <CartSummary />
               </div>
            </div>
         )}
      </>
   );
}

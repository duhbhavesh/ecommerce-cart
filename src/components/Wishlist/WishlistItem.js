import { Link } from 'react-router-dom';
import './WishlistItem.css';

export default function WishlistItem({ product }) {
   return (
      <div className='wishlist-card product product-card'>
         <div className='product-image'>
            <img className='card-img' src={product?.image} alt='' />
         </div>
         <div className='product-details'>
            <h3 className='product-heading'>
               <Link to={`/product/${product.id}`} id='product-title'>
                  {product?.name}
               </Link>
            </h3>
            <div className='product-price'>
               <p className='new-price'>
                  ₹{product?.price}
                  <span className='old-price'>₹ {product?.price}</span>
               </p>
            </div>
         </div>
      </div>
   );
}

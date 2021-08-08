import { useData } from '../../context/DataContext';
import WishlistItem from '../../components/Wishlist/WishlistItem';
import './Wishlist.css';

export const Wishlist = () => {
   const { state } = useData();
   const { wishlist } = state;

   return (
      <>
         <h2 className='wishlist-heading'>Wishlist</h2>
         {wishlist.length === 0 ? (
            <h3 className='wishlist-info'>Your wishlist is Empty</h3>
         ) : (
            <div className='wrapper-wishlist'>
               {wishlist?.map((product) => (
                  <>
                     <WishlistItem key={product.id} product={product} />
                  </>
               ))}
            </div>
         )}
      </>
   );
};

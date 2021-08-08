export const DataReducer = (state, { type, payload }) => {
   switch (type) {
      case 'ADD_CART_ITEM':
         return {
            ...state,
            cart: [...state.cart, { ...payload, quantity: 1 }],
         };

      case 'REMOVE_CART_ITEM':
         return {
            ...state,
            cart: state.cart.filter((item) => item.id !== payload.id),
         };

      case 'ADD_WISHLIST_ITEM':
         return {
            ...state,
            wishlist: [...state.wishlist, { ...payload, quantity: 1 }],
         };

      case 'INC_QUANTITY':
         return {
            ...state,
            cart: state.cart.map((item) =>
               item.id === payload.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
            ),
         };

      case 'DEC_QUANTITY':
         return {
            ...state,
            cart: state.cart.map((item) =>
               item.id === payload.id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item,
            ),
         };

      default:
         break;
   }
};

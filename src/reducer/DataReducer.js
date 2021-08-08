export const DataReducer = (state, { type, payload }) => {
   switch (type) {
      case 'ADD_TO_CART':
         return { ...state, cart: [...state.cart, { ...payload }] };

      default:
         break;
   }
};

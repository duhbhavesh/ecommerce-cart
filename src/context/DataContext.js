import { createContext, useContext, useReducer } from 'react';
import { products } from '../data/products';
import { DataReducer } from '../reducer/DataReducer';

export const DataContext = createContext();

export const initialState = {
   products: products,
   cart: [],
};

export const DataProvider = ({ children }) => {
   const [state, dispatch] = useReducer(DataReducer, initialState);

   return (
      <DataContext.Provider value={{ state, dispatch }}>
         {children}
      </DataContext.Provider>
   );
};

export const useData = () => useContext(DataContext);

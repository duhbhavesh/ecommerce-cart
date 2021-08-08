import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Cart from './pages/Cart/Cart';
import Products from './pages/Products/Products';

function App() {
   return (
      <div>
         <Nav />
         <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
         </Routes>
      </div>
   );
}

export default App;

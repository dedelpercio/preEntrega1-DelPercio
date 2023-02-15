import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './views/PageNotFound/PageNotFound';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  return (
    <div className="container-fluid px-4">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemsListContainer greeting="Hola, Damian." /> } />
            <Route path='/category/:id' element={ <ItemsListContainer /> } />
            <Route path='/detail/:id' element={ <ItemDetailContainer /> } />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path='*' element={ <Navigate to="/404" /> } />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App

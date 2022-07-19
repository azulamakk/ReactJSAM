import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from './components/NotFound';
import Cart from './containers/Cart'
import CounterContainer from './CounterContainer';

function App() {
  return (
    <div>
          <ShopProvider>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<NotFound/>}/>
          </Routes>       
      </BrowserRouter>
    </ShopProvider>
      <CounterContainer/>
    </div>
  );
}

export default App;
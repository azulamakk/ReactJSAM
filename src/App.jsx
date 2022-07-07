
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from './components/NotFound';

function App() {

  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>       
    </BrowserRouter>
  );  
}
  
export default App
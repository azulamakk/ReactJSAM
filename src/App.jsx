import './App.css';
import ShopProvider from './components/context';
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

import NotFound from '././components/NotFound';
import Cart from './containers/Cart'
import ItemListContainer from './ItemListContainer';

function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/'></Route>
                <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
                <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default ItemDetailContainer
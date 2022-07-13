import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import {Shop} from '././context/ShopContext'
import './style.css';

const CartWidget = () => {
  const {cart} = React.useContext(Shop);
  return (
    <div>
    <HiShoppingCart size={32} style={{position: 'absolute', right: '5%'}}/>
    {cart.length && <span>({cart.length})</span>}
    </div>
  )
}

export default CartWidget
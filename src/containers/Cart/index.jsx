import React, { useContext } from 'react'
import { Shop } from './components/context/ShopContext'

const Cart = () => {
  const {cart} = useContext(Shop);

  console.log(cart);
  return (
    <ul>
      {cart.map(producto => {
        return <li key={producto.id}>{producto.nombre} <img src={producto.img} width='80px' alt={producto.nombre}/></li>
      })}
    </ul>
  )
}

export default Cart
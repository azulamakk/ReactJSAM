import React from 'react';
import { useState } from 'react';
import './style.css';

const ItemCount = ({handleAdd, initialStock}) => {

    initialStock = 5


    const [counter, setCounter] = useState(initialStock)

    const onAdd = () => {
        setCounter(counter + 1)
    }

    const onDecrement = () => {
        setCounter(counter - 1)
    }
    
    counter=initialStock
    return(
        <div>
            <p>{count}</p>
            <button onClick={onAdd}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={handleAdd}>Agregar al carrito</button>
        </div>
    )
}

ItemCount()
//export default function App() {
//  const [counter, setCounter] = React.useState({ clicks:0, date: ''})
//  const totalCounter = () => {
//    const date = new Date().toLocaleString();
//    setCounter({ clicks: counter.clicks + 1, date:date }) 
//  }
//
//  return(
//    <div>
//      <p>{counter}</p>
//      <button onClick={totalCounter}>Click me!</button>
//      <p>{counter.clicks}</p>
//      <p>{counter.date}</p>
//    </div>
//  )
//}

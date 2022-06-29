import React from 'react';
import { useState } from 'react';
import './style.css';

initialStock = 10

const ItemCount = ({handleAdd, initialStock}) => {

    const [counter, setCounter] = useState(initialStock)
    counter=1

    const onAdd = () => {
        if (counter<initialStock){
            setCounter(counter + 1)
        }else{
            setCounter(counter)
            alert("Solo quedan " & {counter} & " unidades en stock")
        }
    }

    const onDecrement = () => {
        if (counter<1){
            alert("Por favor seleccione una cantidad valida")
        }else{
            setCounter(counter - 1)
        }
    }

    setCounter(initialStock)
    return(
        <div>
            <p>{counter}</p>
            <button onClick={onAdd}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={handleAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;
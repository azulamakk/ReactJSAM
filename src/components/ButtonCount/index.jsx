import React, { useState } from 'react'
import './style.css'

const ButtonCount = ({ onConfirm, maxQuantity }) => {

    const [value, setValue] = useState(1);

    const handleConfirm = () => {
        if (value <= maxQuantity) {
            onConfirm(value)
        }
        else {
            alert("Value > maxQuantity")
        }
    }
    return (
        <div>
            <button onClick={() => setValue(value => value+1)}>+</button>
            <span>{value}</span>
            <button onClick={() => setValue(value => value-1)}>-</button>
            <button onClick={handleConfirm}>Confirmar</button>
        </div>
    )
}

export default ButtonCount
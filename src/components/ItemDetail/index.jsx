import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonCount from '../ButtonCount';
import "./style.css"

const ItemDetail = ({ producto }) => {
    
    const navigate = useNavigate();

    product.stock = 10;
    const [qtyAdded, setQtyAdded] = useState(0);

    const handleConfirm = (qty) => {
        setQtyAdded(qty);
    }

    const handleTerminate = () => {
        navigate('/cart')
    }

    console.log(qtyAdded);

    return (
        <div>
            <h1>{producto.nombre}</h1>
            <img src={producto.imag}/>
            <p>{producto.artista}</p>
            {!qtyAdded ?
                <ButtonCount onConfirm={handleConfirm} maxQuantity={product.stock} />
                :
                <button onClick={handleTerminate}>Terminar compra</button>
            }
        </div>
    )
}

export default ItemDetail
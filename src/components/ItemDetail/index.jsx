import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Shop} from './context/ShopContext'
import ButtonCount from 'ButtonCount';
import "./style.css"

const ItemDetail = ({ producto }) => {
    
    const navigate = useNavigate();

    producto.stock = 10;
    const [qtyAdded, setQtyAdded] = useState(0);

    const {addItem} = useContext(Shop)

    const handleConfirm = (qty) => {
        setQtyAdded(qty);
    }

    const handleTerminate = () => {
        addItem(producto, qtyAdded)
        navigate('/cart')
    }

    console.log(qtyAdded);

    return (
        <div>
            <h1>{producto.nombre}</h1>
            <img src={producto.imag}/>
            <p>{producto.artista}</p>
            {!qtyAdded ?
                <ButtonCount onConfirm={handleConfirm} maxQuantity={producto.stock} />
                :
                <button onClick={handleTerminate}>Terminar compra</button>
            }
        </div>
    )
}

export default ItemDetail
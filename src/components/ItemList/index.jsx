import './style.css';
import React, { useContext } from 'react'
import { Shop } from '../context'
import Item from '../Item'

const ItemList = ({ productos }) => {

    const { setEstadoA } = useContext(Shop)

    const handleChangeState = () => {
        setEstadoA("Otro valor")
    }



    return (
        <div>
            {productos.map(producto => {
                return <Item product={producto} key={producto.id} />
            })}
            <button onClick={handleChangeState}>Cambio estado A</button>
        </div>
    )
}

export default ItemList
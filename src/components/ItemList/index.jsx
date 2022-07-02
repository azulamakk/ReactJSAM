import './style.css';
import React from 'react';

const ItemList = ({productos}) => {
    return (
        <div>
            {productos.map(producto => {
                return <Item product={producto} key={producto.id}/>
            })}
        </div>
    )
}

export default ItemList
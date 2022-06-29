import 'style.css';
import React from 'react';

const ItemList = ({productos}) => {
    return (
        <div>
            {productos.map(producto => {
                return <Item product={producto} key={producto.id}/>
            })}
            <h3>{producto.nombre}</h3>
            <h4>{producto.artista}</h4>
            <p>{producto.genero}</p>
            <p>{producto.precio}</p>
        </div>
    )
}

export default ItemList
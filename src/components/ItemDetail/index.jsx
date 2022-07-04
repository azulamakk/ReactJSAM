import React from 'react'

const ItemDetail = ({ producto }) => {
    console.log(producto);
    return (
        <div>
            <h1>{producto.nombre}</h1>
            <img src={producto.imag}/>
            <p>{producto.artista}</p>
        </div>
    )
}

export default ItemDetail
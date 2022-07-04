import React from 'react';
import './style.css';

const Item = ({producto}) => {
    return (
      <li>{producto.nombre}</li>
    )
}

export default Item
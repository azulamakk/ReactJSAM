import React from 'react';
import { useState } from 'react';
// import yerbaMate from '../../assets/yerba-mate.webp';

//const ItemListContainer = ({greeting, children}) => {
//  return (
//    <div>
//        {/* {children} */}
//        <p>{greeting}</p>
//        <img src='./assets/tiendaFisica.jpeg' alt="disquera"/>
//    </div>
//  )
//}

const ItemListContainer = ({greeting, children}) => {
  const [color, setColor] = useState ("brown");

  const cambiarColor = () => {
//    color = "red";
//    console.log(color)
    setColor("navy")
  }

  return(
    <div>
      {/* {children} */}
      <p>{greeting}</p>
      <p>{color}</p>
      <button> onClick={cambiarColor}
        Cambair el color a red
      </button>
    </div>
  )
}

export default ItemListContainer
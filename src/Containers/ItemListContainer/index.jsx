import React, { useState } from 'react';
import { useEffect } from 'react';
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
    if (color === "navy") setColor("brown")
    else setColor("navy")
  }

  useEffect(() => {
    console.log("Se montó/actualizó el componente")
  }, [color])

  return(
    <div style={{backgroundColor: color}}>
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
import React, { useState } from 'react';
import { useEffect } from 'react';

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

  useEffect(() => {
    return () => {
      console.log("Se está desmontando el ItemListContainer");
    }
  }, [])

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
import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemCount from '../../components/ItemCount';

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

  const handleAdd = () => {
    console.log("Se agregó al carrito")
  }
  return(
    <div style={{backgroundColor: color}}>
      {/* {children} */}
      <p>{greeting}</p>
      <p>{color}</p>
      <button> onClick={cambiarColor}
        Cambair el color a red
      </button>
      <ItemCount handleAdd={handleAdd}/>
    </div>
  )
}

export default ItemListContainer
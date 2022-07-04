import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemCount from '../../components/ItemCount';
import ItemList from '../../components/ItemList';

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

  const [productos, setProductos] = useState([])
  
  useEffect(() => {

    const getProductos = async() => {
      try{
        const response = await fetch('/mocks/productos.json');
        const data = await response.json();
        console.log(data);
        setProductos(data);
      } catch (error) {
        console.log("Hubo un error: ");
        console.log(error);
      }
    }

    getProductos()

  }, [])

  console.log(productos);

  const handleAdd = (count) => {
    console.log(`Se agregaron al carrito ${count} productos`)
  }

  return(
    <div style={{backgroundColor: color}}>
      {/* {children} */}
      <p>{greeting}</p>
      <p>{color}</p>
      <button onClick={cambiarColor}> 
        Cambiar el color a red
      </button>
      {productos.length !== 0 ?
        <ItemList products={productos}/>
        :
        <p>Loading..</p>
      }
      <ItemCount handleAdd={handleAdd} initialStock={5}/>
    </div>
  )
}

export default ItemListContainer
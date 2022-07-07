import React from 'react';
import { useNavigate } from "react-router-dom";
import './style.css'

const Item = ({producto}) => {
    const navigate = useNavigate();

    const handleDetail = ()=> {
      console.log("Navega hacia el detail");
      navigate(`/detail/${producto.id}`)
    }

  return (
    <div onClick={handleDetail}> {producto.nombre}</div >
  )
}

export default Item
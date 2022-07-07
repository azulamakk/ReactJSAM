import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail'
import {useParams} from 'react-router-dom';

//Obtener los datos de un producto específico
const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})
    const params = useParams()

    console.log(params);

    useEffect(()=> {
        const getProductos = async () => {
            try {
                const response = await fetch('/mocks/productos.json')
                const data = await response.json();
                setProductDetail(data)
            } catch (error) {
                console.log(error)
                setError(error.message)
            }
        }
        getProductos();

    }, [params])

    return (
        Object.keys(productDetail).length !== 0 ?
        <ItemDetail product={productDetail}/>
        :
        <p>Loading...</p>
    )
}

export default ItemDetailContainer
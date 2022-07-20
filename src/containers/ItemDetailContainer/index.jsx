import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestone'
import { db } from '../../firebase/config'

//Obtener los datos de un producto específico
const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const params = useParams()

    console.log(params);

    useEffect(() => {
        const getProductos = async () => {
            try {
                const docRef = doc(db, "products", params.productId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log(docSnap.id)
                    console.log("Document data:", docSnap.data());
                    const productDetail = {id: docSnap.id, ...docSnap.data()}
                    setProductDetail(productDetail)
                } else {
                    console.log("No such document!");
                }

            } catch (error) {
                console.log(error)
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
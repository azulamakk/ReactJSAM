import ModalConEscape from '../../components/ModalConEsc';
import ButtonCount from '../../components/ButtonCount';
import InputCount from '../../components/InputCount';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemListContainer = ({ producto }) => {

  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [modalVisible, setModalVisible] = useState(true)

  const params = useParams()

  console.log(params)

  useEffect(() => {

    const getProductos = async () => {
      try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = []
        querySnapshot.forEach((doc) => {
          productos.push({id: doc.id, ...doc.data()})
        });

        console.log(productos);
        setProductos(productos);
        setProductosFiltrados(productos);
      } catch (error) {
        console.log("Hubo un error: ");
        console.log(error);
      }
    }

    getProductos()

  }, [])

  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(productos)
    }
  }, [params, productos])

  console.log(productos);

  const handleConfirm = (quantity) => {
    console.log("Se agregó la cantidad: " + quantity);
  }
  const type = "input"

  return (
    <div>
      {productos.length !== 0 ?
        <ItemList productos={productosFiltrados} />
        :
        <p>Loading...</p>
      }
    </div>
  )
}
export default ItemListContainer
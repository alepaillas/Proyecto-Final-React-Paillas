import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getArtistById } from "../../firebase.jsx";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addProduct } = useContext(CartContext);

  const handleOnAdded = (quantity) => {
    setQuantityAdded(quantity);
    // console.log("Cantidad agregada", quantity);
    // console.log(product)

    // esta función esta definida en CartContext
    addProduct(product, quantity);
  };

  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    async function queryProduct() {
      try {
        const data = await getProductById(productId);
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        // finally siempre se ejecuta independiente del resultado de la promesa
        // quitamos el spinner cuando se resuelven todas las promesas
        setLoading(false);
      }
    }
    queryProduct();
  }, [productId]);

  const [artist, setArtist] = useState(null);
  const { artistId } = useParams();

  useEffect(() => {
    async function queryArtist() {
      try {
        const data = await getArtistById(artistId);
        setArtist(data);
      } catch (error) {
        setError(error);
      } finally {
        // finally siempre se ejecuta independiente del resultado de la promesa
        // quitamos el spinner cuando se resuelven todas las promesas
        setLoading(false);
      }
    }
    queryArtist();
  }, [artistId]);

  return (
    <div>
      {/* muestra los componentes condicionalmente
			no estoy segura si esta es la forma estandar de hacerlo en react
			pero funciona ¯\_(ツ)_/¯
		 */}
      {loading && <Loader />}
      {artist && <ItemDetail {...artist} />}
      {product && <ItemDetail {...product} />}
      {product && <ItemCount initial={1} stock={10} onAdd={handleOnAdded} />}
    </div>
  );
};

export default ItemDetailContainer;

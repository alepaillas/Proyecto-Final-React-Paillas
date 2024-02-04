import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getArtistById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId)
      .then((response) => {
        setProduct(response);
        //console.log(response)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  const [artist, setArtist] = useState(null);
  const { artistId } = useParams();

  useEffect(() => {
    getArtistById(artistId)
      .then((response) => {
        setArtist(response);
        //console.log(response)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [artistId]);

  return (
    <div>
      {/* muestra los componentes condicionalmente
			no estoy segura si esta es la forma estandar de hacerlo en react
			pero funciona ¯\_(ツ)_/¯
		 */}
      {artist && <ItemDetail {...artist} />}
      {product && <ItemDetail {...product} />}
      {product && (
        <ItemCount
          initial={1}
          stock={10}
          onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;

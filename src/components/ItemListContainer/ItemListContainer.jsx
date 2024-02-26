import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getProducts,
  getProductsByCategory,
  getArtists,
  getArtistsByCategory,
} from "../../firebase.jsx";
import ProductList from "../ItemList/ProductList";
import ArtistList from "../ItemList/ArtistList";
import Categories from "../Categories/Categories";
import Loader from "../Loader/Loader";

const ItemListContainer = ({ greeting }) => {
  // para inicializar materialize tabs
  useEffect(() => {
    const tabsContainer = document.querySelector(".tabs");
    const options = {
      swipeable: false, // swipeable tabs no son responsive, que ironía
    };
    const instance = M.Tabs.init(tabsContainer, options);

    // función de limpieza al desmontar, para prevenir memory leaks,
    // sugerido por chatgpt ¯\_(ツ)_/¯
    return () => {
      // necesario porque sino brickea xd
      // chequea antes si la instancia esta cargada
      if (instance && instance._indicator && instance._indicator.parentNode) {
        instance.destroy();
      }
    };
  }, []);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;
    async function queryProducts() {
      try {
        const data = await asyncFunc(categoryId);
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        // finally siempre se ejecuta independiente del resultado de la promesa
        // quitamos el spinner cuando se resuelven todas las promesas
        setLoading(false);
      }
    }
    queryProducts();
  }, [categoryId]);

  // aquí se repite código, a futuro hay que reemplazar por función o componente de orden superior

  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const asyncFunc = categoryId ? getArtistsByCategory : getArtists;
    async function queryArtists() {
      try {
        const data = await asyncFunc(categoryId);
        setArtists(data);
      } catch (error) {
        setError(error);
      } finally {
        // finally siempre se ejecuta independiente del resultado de la promesa
        // quitamos el spinner cuando se resuelven todas las promesas
        setLoading(false);
      }
    }
    queryArtists();
  }, [categoryId]);

  // para tener una lista de categorias únicas
  // primero unimos los arrays de artistas y productos
  const categories = [...artists, ...products];
  const categoryNames = categories.map((e) => e.category);

  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const newUniqueCategories = [
      // un set es una coleccion de objetos en donde cada valor solo ocurre una vez
      ...new Set([...uniqueCategories, ...categoryNames]),
    ];

    // comparamos las categorias con el estado actual para ver si hay que actualizarlo
    // este paso es importante porque sino useEffect entra en un bucle infinito
    if (!arraysAreEqual(uniqueCategories, newUniqueCategories)) {
      setUniqueCategories(newUniqueCategories);
    }
  }, [categoryNames, uniqueCategories]);

  const arraysAreEqual = (arr1, arr2) => {
    return (
      arr1.length === arr2.length &&
      // .every checa si cada uno de los elementos del array pasa el test
      arr1.every((value, index) => value === arr2[index])
    );
  };
  //   console.log(uniqueCategories);
  //   console.log(...uniqueCategories)

  return (
    <div className="row">
      <h3 className="col s12 center-align">{greeting}</h3>
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s6">
            <a href="#pinturas">Pinturas</a>
          </li>
          <li className="tab col s6">
            <a href="#artistas">Artistas</a>
          </li>
        </ul>
      </div>

      {loading && <Loader />}

      <div className="col s12 marginTop1 center">
        {uniqueCategories.map((category, index) => (
          <Categories key={index} category={category} />
        ))}
      </div>
      <div id="artistas" className="col s12">
        <ArtistList loading={loading} artists={artists} />
      </div>
      <div id="pinturas" className="col s12">
        <ProductList loading={loading} products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getProducts,
  getProductsByCategory,
  getArtists,
  getArtistsByCategory,
} from "../../asyncMock.jsx";
import ProductList from "../ItemList/ProductList";
import ArtistList from "../ItemList/ArtistList";
import Categories from "../Categories/Categories";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // si existe categoryId -> getProductsByCategory else getProducts
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  // aquí se repite código, a futuro hay que reemplazar por función o componente de orden superior

  const [artists, setArtists] = useState([]);
  //   const { categoryId } = useParams();

  useEffect(() => {
    // si existe categoryId -> getArtistsByCategory else getArtists
    const asyncFunc = categoryId ? getArtistsByCategory : getArtists;

    asyncFunc(categoryId)
      .then((response) => {
        setArtists(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  // para inicializar materialize tabs
  useEffect(() => {
    const tabsContainer = document.querySelector(".tabs");
    const options = {
      swipeable: false, // swipeable tabs no son responsive, que ironía
    };
    const instance = M.Tabs.init(tabsContainer, options);
  });

  //   //   unimos los json de artistas y productos
  //   let categories = artists.concat(products);
  //   //   tomamos solo las categorias
  //   categories = categories.map((e) => e.category);
  //   //   console.log(categories)
  //   //   filtramos las categorias repetidas para mostrar solo 1 de cada 1
  //   let uniqueCategories = [
  //     categories.reduce((accumulator, currentValue) => {
  //       if (!accumulator.includes(currentValue)) {
  //         accumulator.push(currentValue);
  //       }
  //       return accumulator;
  //     }, []),
  //   ];
  //   console.log(uniqueCategories);
  const categories = [...artists, ...products];
  const categoryNames = categories.map((e) => e.category);

  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    // Check if uniqueCategories has changed before updating state
    const newUniqueCategories = [
      ...new Set([...uniqueCategories, ...categoryNames]),
    ];

    if (!arraysAreEqual(uniqueCategories, newUniqueCategories)) {
      setUniqueCategories(newUniqueCategories);
    }
  }, [categoryNames, uniqueCategories]);

  const arraysAreEqual = (arr1, arr2) => {
    return (
      arr1.length === arr2.length &&
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
            <a href="#artistas">Artistas</a>
          </li>
          <li className="tab col s6">
            <a href="#pinturas">Pinturas</a>
          </li>
        </ul>
      </div>
      {uniqueCategories.map((category, index) => (
        <Categories key={index} category={category} />
      ))}
      <div id="artistas" className="col s12">
        <ArtistList artists={artists} />
      </div>
      <div id="pinturas" className="col s12">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;

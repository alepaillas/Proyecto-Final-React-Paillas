import { Link } from "react-router-dom";
import Product from "../Item/Product";

const ProductList = ({ loading, products }) => {
  return (
    <div className="row">
      {/* alternativa con ternary operator ya que no podemos
       usar la sintaxis if() {} con arrow function component */}
      {/* si no estamos cargando y no hay productos, entonces render */}
      {!loading && products.length == 0 ? (
        <div className="col s4 offset-s4 center">
          <p>No se encontraron productos.</p>
          <Link to="/" className="btn">
            Limpiar filtros
          </Link>
        </div>
      ) : (
        // else
        products.map((product) => <Product key={product.id} {...product} />)
      )}
    </div>
  );
};

export default ProductList;

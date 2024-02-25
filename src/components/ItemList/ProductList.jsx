import { Link } from "react-router-dom";
import Product from "../Item/Product";

const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.length == 0 ? (
        <div className="center">
          <p>No se encontraron productos.</p>
          <Link to="/" className="btn">
            Limpiar filtros
          </Link>
        </div>
      ) : (
        products.map((product) => <Product key={product.id} {...product} />)
      )}
    </div>
  );
};

export default ProductList;

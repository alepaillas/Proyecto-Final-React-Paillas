import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Item.css"

const Product = ({ name, img, price, id }) => {
  const { cart, addProduct } = useContext(CartContext);

  const handleOnClick = () => {
    // re-estructuramos para pasar el product a addProduct
    const product = {
      id: id,
      name: name,
      price: price,
    };
    // console.log(product)

    addProduct(product, 1);
  };

  return (
    <div className="card product">
      <div className="card-image">
        <Link to={`/product/${id}`}>
          <img src={img} alt={name}></img>
        </Link>
        <Link to={`/product/${id}`}>
          <span className="card-title">{name}</span>
        </Link>
        <button
          onClick={handleOnClick}
          className="btn-floating btn-large halfway-fab waves-effect waves-light red"
        >
          <i className="material-icons">add_shopping_cart</i>
        </button>
      </div>
      <div className="card-content">
        <p>$ {new Intl.NumberFormat().format(price)}</p>
      </div>
    </div>
  );
};

export default Product;

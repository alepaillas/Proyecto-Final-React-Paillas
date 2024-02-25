import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartProductList.css";

const CartProductList = ({ id, name, price, quantity }) => {
  const { removeProduct } = useContext(CartContext);

  const handleOnClick = () => {
    removeProduct(id);
  };

  return (
    <li className="productListWrapper">
      <span className="productListName">{name}</span>
      {/* formateamos el precio según localización */}
      <span className="productListPrice">
        $ {new Intl.NumberFormat().format(price)} x {quantity}
      </span>
      <button
        className="btn-floating productListRemove"
        onClick={handleOnClick}
      >
        <i className="material-icons">clear</i>
      </button>
    </li>
  );
};

export default CartProductList;

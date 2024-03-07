import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartProductList.css";

const CartProductList = ({ id, name, price, quantity }) => {
  const { removeProduct } = useContext(CartContext);

  const handleOnClick = () => {
    removeProduct(id);
  };

  return (
    <li className="productListWrapper alignItemsCenter marginVertical1">
      <span className="productListName uiText">{name}</span>
      {/* formateamos el precio según localización */}
      <span className="productListPrice uiText">
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

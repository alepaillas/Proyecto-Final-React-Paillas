import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { cart, totalItems } = useContext(CartContext);

  return (
    <NavLink
      to={"/cart"}
      className="col s2 offset-s8 l2 offset-l4 flex alignItemsCenter"
    >
      <i className="material-icons">shopping_cart</i>
      <p className="margin0">{totalItems()}</p>
    </NavLink>
  );
};

export default CartWidget;

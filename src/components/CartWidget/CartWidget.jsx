import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <NavLink to={"/cart"} className="col s2 offset-s1 l2 flex alignItemsCenter">
      <i className="material-icons">shopping_cart</i>
      <p className="margin0">{cart.length}</p>
    </NavLink>
  );
};

export default CartWidget;

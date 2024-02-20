import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { totalProductsInCart } = useContext(CartContext);
  // console.log(totalProductsInCart())

  return (
    <NavLink to={"/cart"} className="col s2 center-align">
      🛒 {totalProductsInCart()}
    </NavLink>
  );
};

export default CartWidget;

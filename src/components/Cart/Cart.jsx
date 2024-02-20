import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProductList from "./CartProductList";

const Cart = () => {
  const { clearCart, productsInCart } = useContext(CartContext);
  const products = [...productsInCart()];

  return (
    <>
      {/* <CartProductList {...products} /> */}
      {
        products.forEach().name
      }
      <button onClick={clearCart}>Vaciar Carrito</button>
    </>
  );
};

export default Cart;

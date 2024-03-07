import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProductList from "./CartProductList";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalValue } = useContext(CartContext);
  // console.log(cart)

  return (
    <>
      {/* si no hay productos en el carrito */}
      {cart.length == 0 ? (
        <div className="center">
          <p>No hay productos en el carrito</p>
          <Link to="/" className="btn-large uiText">
            Ver Tienda
          </Link>
        </div>
      ) : (
        // else
        <>
          <ul className="marginTop2">
            {cart.map((product) => (
              <CartProductList key={product.id} {...product} />
            ))}
          </ul>
          <div className="flex justifyContentSpaceBetween marginVertical2">
            <button className="btn-small marginLeft2" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <span className="marginRight2 uiText">Total: ${totalValue()}</span>
          </div>
          <div className="center">
            <Link to="/" className="btn marginHorizontal1 uiText">
              Seguir comprando
            </Link>
            <Link to="/checkout" className="btn marginHorizontal1 uiText">
              Realizar compra
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;

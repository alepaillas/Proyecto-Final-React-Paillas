import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addProduct = (product, quantity) => {
    if (!isInCart(product.id)) {
      setCart((prev) => [...prev, { ...product, quantity }]);
      // console.log("Se agrego un item al carrito")
      M.toast({ html: "Se agregó " + quantity + " item(s) al carrito." });
    } else {
      // console.error("El producto ya fue agregado");
      M.toast({ html: "Este producto ya esta en el carrito."});
    }
  };

  const removeProduct = (productId) => {
    const cartUpdated = cart.filter((product) => product.id !== productId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cart, totalValue } = useContext(CartContext);

  return (
    <>
      <div className="center marginTop2">
        <p>El detalle de su compra es:</p>
        {cart.map((e) => (
          <p>
            {e.name} $ {new Intl.NumberFormat().format(e.price)} x {e.quantity}{" "}
            = ${" "}
            {new Intl.NumberFormat().format(
              parseInt(e.price) * parseInt(e.quantity)
            )}
          </p>
        ))}
        <p>Total: $ {totalValue()}</p>
        <hr className="hrMedium"></hr>
        <p>
          Por favor ingrese sus datos de contacto para poder realizar su pedido.
        </p>
      </div>
      <div className="row">
        <form className="col s6 offset-s3">
          <div className="input-field">
            <i className="material-icons prefix">account_circle</i>
            <input id="name" type="text" className="validate"></input>
            <label htmlFor="name">Nombre y Apellido</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input id="email" type="email" className="validate"></input>
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">phone</i>
            <input id="phone" type="tel" className="validate"></input>
            <label htmlFor="phone">Teléfono (+56912345678)</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">location_on</i>
            <input id="address" type="text" className="validate"></input>
            <label htmlFor="address">Mi calle 1234, Mi comuna, Mi región</label>
          </div>
        </form>
      </div>
      <div className="center">
        <Link to="/cart" className="btn marginHorizontal1">
          Volver
        </Link>
        <button className="btn marginHorizontal1">Finalizar compra</button>
      </div>
    </>
  );
};

export default Checkout;

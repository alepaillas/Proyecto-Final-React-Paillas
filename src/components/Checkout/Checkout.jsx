import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cart, totalValue } = useContext(CartContext);

  // estados para el form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    address: "",
  });

  // usamos la propiedad name para identificar el input que queremos setear
  const handleChange = (e) => {
    const { name, value } = e.target;
    // llenamos con la data previa + nuestro input modificado
    setFormData({ ...formData, [name]: value });
  };

  const [showConfirmEmailError, setShowConfirmEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.email == formData.confirmEmail
      ? (console.log(formData), setShowConfirmEmailError(false))
      : (console.error("Confirme su email"), setShowConfirmEmailError(true));
  };

  return (
    <>
      <div className="center marginTop2">
        <p>El detalle de su compra es:</p>
        {cart.map((product) => (
          // importante añadir el key
          // https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
          <p key={product.id} {...product}>
            {product.name} $ {new Intl.NumberFormat().format(product.price)} x{" "}
            {product.quantity} = ${" "}
            {new Intl.NumberFormat().format(
              parseInt(product.price) * parseInt(product.quantity)
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
        <form
          onSubmit={handleSubmit}
          className="col s6 offset-s3 clickThroughLabels"
        >
          <div className="input-field">
            <i className="material-icons prefix">account_circle</i>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="validate"
            ></input>
            <label htmlFor="name">Nombre y Apellido</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="validate"
            ></input>
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input
              name="confirmEmail"
              type="email"
              value={formData.confirmEmail}
              onChange={handleChange}
              // clase condicional en caso de error
              className={
                showConfirmEmailError == true
                  ? "validate invalid"
                  : "validate valid"
              }
            ></input>
            <label htmlFor="confirmEmail">Repita su E-mail</label>
            {/* helper text condicional en caso de error */}
            {showConfirmEmailError && (
              <span
                className="helper-text"
                data-error="Confirme que su E-mail este bien escrito"
              ></span>
            )}
          </div>
          <div className="input-field">
            <i className="material-icons prefix">phone</i>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="validate"
            ></input>
            <label htmlFor="phone">Teléfono (+56912345678)</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">location_on</i>
            <input
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="validate"
            ></input>
            <label htmlFor="address">Mi calle 1234, Mi comuna, Mi región</label>
          </div>
          <button type="submit" className="btn gridAutoMargin">
            Finalizar compra
          </button>
        </form>
      </div>
      <div className="center">
        <Link to="/cart" className="btn-small marginHorizontal1">
          Volver
        </Link>
      </div>
    </>
  );
};

export default Checkout;

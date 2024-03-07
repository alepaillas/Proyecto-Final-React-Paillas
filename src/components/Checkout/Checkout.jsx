import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Checkout.css";
import { sendOrder } from "../../firebase.jsx";

const Checkout = () => {
  const { cart, totalValue, clearCart } = useContext(CartContext);

  // para el valor total de los productos en el carrito
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = totalValue();
    setTotal(total);
  }, []);

  // la orden que pusheamos a firebase
  const [orderId, setOrderId] = useState("");
  async function pushOrder(order) {
    try {
      const orderId = await sendOrder(order);
      // console.log(id);
      setOrderId(orderId);
    } catch (error) {
      console.error(error);
    } finally {
      clearCart();
    }
  }

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

    const order = {
      buyer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
      items: cart,
      total: total,
    };

    formData.email == formData.confirmEmail
      ? (setShowConfirmEmailError(false), pushOrder(order))
      : (M.toast({
          html: "Las entradas de E-mail no concuerdan, por favor reingresa tu E-mail.",
        }),
        setShowConfirmEmailError(true));
  };

  return (
    <>
      {/* esto esta horrible, pero funk ¯\_(ツ)_/¯ */}
      {!Boolean(orderId.length) ? (
        <>
          <div className="center marginTop2">
            <p>El detalle de su compra es:</p>
            {cart.map((product) => (
              // importante añadir el key
              // https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
              <p key={product.id} {...product}>
                {product.name} $ {new Intl.NumberFormat().format(product.price)}{" "}
                x {product.quantity} = ${" "}
                {new Intl.NumberFormat().format(
                  parseInt(product.price) * parseInt(product.quantity)
                )}
              </p>
            ))}
            <p>Total: $ {total}</p>
            <hr className="hrMedium"></hr>
            <p>
              Por favor ingrese sus datos de contacto para poder realizar su
              pedido.
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
                  required
                  className="validate"
                ></input>
                <label className="uiText" htmlFor="name">
                  Nombre y Apellido
                </label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="validate"
                ></input>
                <label className="uiText" htmlFor="email">
                  E-mail
                </label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input
                  name="confirmEmail"
                  type="email"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  required
                  // clase condicional en caso de error
                  className={
                    showConfirmEmailError == true
                      ? "validate invalid"
                      : "validate valid"
                  }
                ></input>
                <label className="uiText" htmlFor="confirmEmail">
                  Repita su E-mail
                </label>
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
                  required
                  className="validate"
                ></input>
                <label className="uiText" htmlFor="phone">
                  Teléfono (+56912345678)
                </label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">location_on</i>
                <input
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="validate"
                ></input>
                <label className="uiText" htmlFor="address">
                  Mi calle 1234, Mi comuna, Mi región
                </label>
              </div>
              <button type="submit" className="btn gridAutoMargin uiText">
                Finalizar compra
              </button>
            </form>
          </div>
          <div className="center">
            <Link to="/cart" className="btn-small marginHorizontal1 uiText">
              Volver
            </Link>
          </div>
        </>
      ) : (
        <div className="center marginBottom2">
          <p>El id de tu pedido es:</p>
          <b>{orderId}</b>
          <p>Guardalo en algún lugar seguro para consultarnos por él.</p>
          <p>
            Prontamente nos pondremos en contacto contigo para concretar el
            envío de tus productos.
          </p>
        </div>
      )}
    </>
  );
};

export default Checkout;

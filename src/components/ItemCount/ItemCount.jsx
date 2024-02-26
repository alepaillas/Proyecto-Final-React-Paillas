import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    // if(quantity < stock) {
    //     setQuantity(quantity + 1)
    // }
    quantity < stock && setQuantity(quantity + 1);
  };

  const decrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  return (
    <div className="ItemCount">
      <button className="btn marginVerticalAuto" onClick={decrement}>
        -
      </button>
      <p>{quantity}</p>
      <button className="btn marginVerticalAuto" onClick={increment}>
        +
      </button>
      <button
        className="btn marginVerticalAuto"
        onClick={() => onAdd(quantity)}
        disabled={!stock}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

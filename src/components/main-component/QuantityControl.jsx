import { useState } from "react";

function QuantityControl(props) {
  const [quantity, setQuantity] = useState(0);
  function handleQuantity(event) {
    const number = parseInt(event.target.value);
    setQuantity(number);
  }

  function increase() {
    setQuantity((previous) => previous + 1);
  }

  function decrease() {
    setQuantity((previous) => previous > 0 && previous - 1);
  }

  return (
    <div className="quantity-control">
      <img src={props.minus} alt="minus-icon" onClick={decrease} />
      <input
        type="number"
        className="quantity-display"
        onChange={handleQuantity}
        value={quantity}
      />
      <img src={props.plus} alt="plus-icon" onClick={increase} />
    </div>
  );
}

export default QuantityControl;

import { useState } from "react";
import minus from "../../../public/images/icon-minus.svg";
import plus from "../../../public/images/icon-plus.svg";

function QuantityControl(props) {
  const [quantity, setQuantity] = useState(0);
  function handleQuantity(event) {
    const number = parseInt(event.target.value);
    setQuantity(number);
    props.getQuantity(number);
  }

  function increase() {
    setQuantity((previous) => {
      const newValue = previous + 1;
      props.getQuantity(newValue);
      return newValue;
    });
  }

  function decrease() {
    setQuantity((previous) => {
      const newValue = previous > 0 && previous - 1;
      props.getQuantity(newValue);
      return newValue;
    });
  }

  return (
    <div className="quantity-control">
      <img src={minus} alt="minus-icon" className="minus" onClick={decrease} />
      <input
        type="number"
        className="quantity-display"
        onChange={handleQuantity}
        value={quantity}
      />
      <img src={plus} alt="plus-icon" className="plus" onClick={increase} />
    </div>
  );
}

export default QuantityControl;

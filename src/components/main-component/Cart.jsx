import { useState } from "react";
import productImg from "../../../public/images/image-product-1-thumbnail.jpg";
import deleteIcon from "../../../public/images/icon-delete.svg";

function Cart(props) {
  const [orders, setOrders] = useState(["Fall Limited Edition Sneakers"]);

  return (
    <div className="cart">
      <h4>Cart</h4>
      <ul>
        {props.quantity > 0 ? (
          <div>
            {orders.map((item, index) => {
              return (
                <li key={index}>
                  <img src={productImg} alt="" className="thumbnail" />
                  <div>
                    {item}
                    <div>
                      <span>$125.00</span>
                      <span>x {props.quantity}</span>
                      <span className="total-price">
                        ${props.quantity * 125}.00
                      </span>
                    </div>
                  </div>
                  <div>
                    <img src={deleteIcon} alt="" className="delete" />
                  </div>
                </li>
              );
            })}
            <button className="chekout">Chekout</button>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </ul>
    </div>
  );
}

export default Cart;

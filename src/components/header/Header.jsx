import { useState } from "react";
import logo from "../../../images/logo.svg";
import NavBar from "./NavBar";
import cartIcon from "../../../images/icon-cart.svg";
import avatar from "../../../images/image-avatar.png";
import Cart from "../main-component/Cart";

function Header(props) {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState("closed");
  function handleClick() {
    setVisible(!visible);
    setMenuOpen((prev) => {
      if (prev === "closed") {
        return "open";
      } else return "closed";
    });
  }
  document.body.style.overflow = visible ? "hidden" : "auto";

  const [cartVisible, setCartVisible] = useState(false);
  function showCart() {
    setCartVisible(!cartVisible);
  }

  return (
    <header>
      {visible && <div className="overlay"></div>}
      <button
        className="menu-btn"
        aria-controls="navigationBar"
        data-menu={menuOpen}
        onClick={handleClick}
      ></button>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <NavBar id="navigationBar" dataVisible={visible} />
      <div className="header-right">
        <div className="cart-icon-container">
          <span className="units-number">
            {props.addClicked && props.quantity}
          </span>
          <img
            src={cartIcon}
            alt="cart-icon"
            className="cart-icon"
            onClick={showCart}
          />
          {cartVisible && <Cart quantity={props.quantity} />}
        </div>
        <img className="avatar" src={avatar} alt="" />
      </div>
    </header>
  );
}

export default Header;

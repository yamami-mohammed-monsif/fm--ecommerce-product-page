import { useState } from "react";
import logo from "../../../images/logo.svg";
import NavBar from "./NavBar";
import cartIcon from "../../../images/icon-cart.svg";
import avatar from "../../../images/image-avatar.png";
import menuIcon from "../../../images/icon-menu.svg";

function Header() {
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

  return (
    <header>
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
        <div>
          <img src={cartIcon} alt="cart-icon" />
        </div>
        <img className="avatar" src={avatar} alt="" />
      </div>
    </header>
  );
}

export default Header;

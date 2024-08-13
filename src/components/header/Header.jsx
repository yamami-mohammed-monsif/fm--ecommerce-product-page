import logo from "../../../images/logo.svg";
import NavBar from "./NavBar";
import cartIcon from "../../../images/icon-cart.svg";
import avatar from "../../../images/image-avatar.png";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <NavBar />
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

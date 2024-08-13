import minus from "../../../images/icon-minus.svg";
import plus from "../../../images/icon-plus.svg";
import cart from "../../../images/icon-cart.svg";
import Slide from "./Slide";
import Thumbnails from "./Thumbnails";
import AddToCart from "./AddToCart";
import QuantityControl from "./QuantityControl";
import Pricing from "./Pricing";

function Main(props) {
  const { slides, thumbnails } = props.data;

  return (
    <div>
      <div>
        <Slide slides={slides} />
        <Thumbnails thumbnails={thumbnails} />
      </div>
      <div>
        <p>sneaker company</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion,
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <Pricing />
        <div>
          <QuantityControl plus={plus} minus={minus} />
          <AddToCart icon={cart} />
        </div>
      </div>
    </div>
  );
}

export default Main;

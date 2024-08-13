function AddToCart(props) {
  return (
    <button>
      <img src={props.icon} alt="cart-icon" />
      <span>Add to cart</span>
    </button>
  );
}

export default AddToCart;

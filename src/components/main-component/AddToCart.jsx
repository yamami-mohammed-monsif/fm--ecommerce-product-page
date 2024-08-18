function AddToCart(props) {
  return (
    <button className="add-to-cart" onClick={props.onAddClicked}>
      <img src={props.icon} alt="cart-icon" />
      <span>Add to cart</span>
    </button>
  );
}

export default AddToCart;

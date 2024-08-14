function QuantityControl(props) {
  return (
    <div className="quantity-control">
      <img src={props.minus} alt="minus-icon" />
      <input type="number" className="quantity-display" value={0} />
      <img src={props.plus} alt="plus-icon" />
    </div>
  );
}

export default QuantityControl;

function QuantityControl(props) {
  return (
    <div>
      <img src={props.minus} alt="minus-icon" />
      <input type="number" />
      <img src={props.plus} alt="plus-icon" />
    </div>
  );
}

export default QuantityControl;

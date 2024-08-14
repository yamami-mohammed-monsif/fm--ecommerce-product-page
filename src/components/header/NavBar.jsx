function NavBar(props) {
  return (
    <ul className="navigation" id={props.id} data-visible={props.dataVisible}>
      <li>
        <a href="#">Collections</a>
      </li>
      <li>
        <a href="#">Men</a>
      </li>
      <li>
        <a href="#">Women</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contacts</a>
      </li>
    </ul>
  );
}

export default NavBar;

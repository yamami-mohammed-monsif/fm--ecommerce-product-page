import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main-component/Main";
import data from "./data/data.json";
import "./styles.css";

function App() {
  const [value, setValue] = useState(0);
  function handleQuantity(quantity) {
    setValue(quantity);
  }

  const [addClicked, setAddClicked] = useState(false);
  function onAddClicked() {
    setAddClicked(true);
  }

  return (
    <div className="container">
      <Header quantity={value} addClicked={addClicked} />
      <Main
        data={data}
        handleQuantity={handleQuantity}
        onAddClicked={onAddClicked}
      />
    </div>
  );
}

export default App;

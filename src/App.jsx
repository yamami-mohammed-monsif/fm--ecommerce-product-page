import Header from "./components/header/Header";
import Main from "./components/main-component/Main";
import data from "./data/data.json";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Main data={data} />
    </div>
  );
}

export default App;

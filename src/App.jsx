import { NavBar } from "./components/NavBar";
import './App.css';
import ItemListContainer from "./components/ItemListContainer";

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer productos={"Aquí van los productos"} />
    </div>
  )
}

export default App
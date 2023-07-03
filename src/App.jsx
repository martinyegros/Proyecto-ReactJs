import { NavBar } from "./components/NavBar/NavBar";
import './styles/styles.scss';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer productos={"Aquí van los productos"} />
    </div>
  )
}

export default App
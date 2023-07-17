import { NavBar } from "./components/NavBar/NavBar";
import './styles/styles.scss';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="*" element={ <h2>Página no encontrada</h2> }/>
      </Routes>

    </BrowserRouter>
  )
};

export default App
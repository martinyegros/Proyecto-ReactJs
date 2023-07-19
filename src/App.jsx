import { NavBar } from "./components/NavBar/NavBar";
import './styles/styles.scss';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ErrorPagina } from "./components/ErrorPagina/ErrorPagina";

function App() {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
        <Route path="*" element={ <ErrorPagina/> }/>
      </Routes>

    </BrowserRouter>
  )
};

export default App
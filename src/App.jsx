import { NavBar } from "./components/NavBar/NavBar";
import './styles/styles.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ErrorPagina } from "./components/ErrorPagina/ErrorPagina";
import { Footer } from "./components/Footer/Footer";
import { Inicio } from "./components/Inicio/Inicio";
import { Producto } from "./components/Productos/Productos";
import { CartProvider } from "./context/CartContext";
import { CartView } from "./components/CartView/CartView";

function App() {

  return (
    <CartProvider>
      
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/productos" element={ <Producto /> }/>
          <Route path="/productos/:categoryId" element={ <Producto /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
          <Route path="*" element={ <ErrorPagina/> }/>
          <Route path="/" element={ <Inicio /> }/>
          <Route path="/cart" element={ <CartView /> }/>
          {/* <Route path="/información" element={}/>
          <Route path="/contacto" element={}/> */}
        </Routes>

        <Footer />

      </BrowserRouter>
    
    </CartProvider>
  )
};

export default App
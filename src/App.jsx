import { NavBar } from "./components/NavBar/NavBar";
import './styles/styles.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ErrorPagina } from "./components/ErrorPagina/ErrorPagina";
import { Footer } from "./components/Footer/Footer";
import { Inicio } from "./components/Inicio/Inicio";
import { CartProvider } from "./context/CartContext";
import { CartView } from "./components/CartView/CartView";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Checkout } from "./components/Checkout/Checkout";
import { Contacto } from "./components/Contacto/Contacto";
import { MediosDePago } from "./components/MediosDePago/MediosDePago";
import { Entregas } from "./components/Entregas/Entregas";

function App() {

  return (
    <CartProvider>
      
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/productos" element={ <ItemListContainer /> }/>
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
          <Route path="*" element={ <ErrorPagina/> }/>
          <Route path="/" element={ <Inicio /> }/>
          <Route path="/cart" element={ <CartView /> }/>
          <Route path="/checkout" element={ <Checkout /> } />
          <Route path="/mediosdepago" element={ <MediosDePago />}/>
          <Route path="/entrega-envios" element={ < Entregas />}/>
          <Route path="/contacto" element={ <Contacto />}/>
        </Routes>

        <Footer />

      </BrowserRouter>
    
    </CartProvider>
  )
};

export default App
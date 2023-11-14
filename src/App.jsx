import Busqueda from "./components/Busqueda";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Viewlist from "./components/Viewlist";
import DetalleProducto from "./components/DetalleProducto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Busqueda />}></Route>
        <Route path="/items/:nombre" element={<Viewlist />}></Route>
        <Route path="/item/:id" element={<DetalleProducto />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

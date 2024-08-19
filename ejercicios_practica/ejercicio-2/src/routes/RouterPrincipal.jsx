import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Componente1 from "../views/Componente1";
import Componente2 from "../views/Componente2";
import Error404 from "../views/Error404";

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/componente1" element={<Componente1 />} />
            <Route path="/componente2" element={<Componente2 />} />
            <Route path="/error404" element={<Error404 />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPrincipal
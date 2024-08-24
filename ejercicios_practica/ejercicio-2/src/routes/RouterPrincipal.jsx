import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/Home";
import Componente1 from "../views/Componente1";
import Componente2 from "../views/Componente2";
import Error404 from "../views/Error404";
import Navbar from "./Navbar";
import InicioSubRuta from "../views/subrutas/InicioSubRuta";
import SubRuta1 from "../views/subrutas/SubRuta1";
import SubRuta2 from "../views/subrutas/SubRuta2";
import RouterSubRutas from "./RouterSubRutas";
import Persona from "../views/Persona";

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/componente1" element={<Componente1 />} />
            <Route path="/componente2" element={<Componente2 />} />

            <Route path="/subrutas" element={<RouterSubRutas />} >
              <Route index  element={<InicioSubRuta />} />
              <Route path="subruta1" element={<SubRuta1 />} />
              <Route path="subruta2" element={<SubRuta2 />} />
            </Route>

            <Route path="/persona/:nombre?/:apellido?/" element={<Persona />} />
            <Route path="/persona/:nombre?/" element={<Persona />} />
            <Route path="/persona/" element={<Persona />} />
            <Route path="/navegar" element={<Navigate to="/persona/TuNombre/TuApellido" />} />

            <Route path="*" element={<Error404 />} />
        </Routes>   
    </BrowserRouter>
  )
}

export default RouterPrincipal
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Contact from "../views/Contact";

const RouterPrincipal = () => { 
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
        </Routes> 
    </BrowserRouter>
  )
}

export default RouterPrincipal;
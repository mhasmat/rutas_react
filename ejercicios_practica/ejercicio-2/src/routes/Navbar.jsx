import { NavLink } from "react-router-dom";

const Navbar = () => {
  return ( 
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'} className={({isActive}) => (isActive ? "active" : "")}> Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/componente1'} className={({isActive}) => (isActive ? "active" : "")}> Componente 1</NavLink>
                </li>
                <li>
                    <NavLink to={'/componente2'} className={({isActive}) => (isActive ? "active" : "")}> Componente 2</NavLink>
                </li>
                <li>
                    <NavLink to={'/subrutas'} className={({isActive}) => (isActive ? "active" : "")}>
                    Sub-Rutas</NavLink>
                </li>
                <li>
                    <NavLink to={'/persona'} className={({isActive}) => (isActive ? "active" : "")}>
                    Persona</NavLink>
                </li>
            </ul>
        </nav>
    
  )
}

export default Navbar
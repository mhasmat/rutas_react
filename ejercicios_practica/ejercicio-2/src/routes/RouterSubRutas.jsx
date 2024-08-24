import { NavLink, Outlet } from "react-router-dom";

const RouterSubRutas = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to={'/subrutas'} className={({isActive}) => (isActive ? "active" : "")}>
                 Inicio Sub-Rutas</NavLink>
            </li>
            <li>
                <NavLink to={'subruta1'} className={({isActive}) => (isActive ? "active" : "")}> 
                 Sub-Ruta 1</NavLink>
            </li>
            <li>
                <NavLink to={'subruta2'} className={({isActive}) => (isActive ? "active" : "")}> 
                 Sub-Ruta 2</NavLink>
            </li>
        </ul>
        <Outlet />
    </nav>
  )
}

export default RouterSubRutas
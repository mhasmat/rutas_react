import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
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
                    <NavLink to={'/error404'} className={({isActive}) => (isActive ? "active" : "")}> Error 404</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
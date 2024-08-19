import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <h1>Bienvenido/a a la aplicación de navegación</h1>
        <p>Este es el componente <span>Home</span></p>

        <Link to="/contact">
          <button>
            <h4>Ir a Contacto</h4>
          </button>
        </Link>
    </div>
  )
}

export default Home;
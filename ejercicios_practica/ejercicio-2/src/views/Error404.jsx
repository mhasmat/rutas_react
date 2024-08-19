import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
        <h2>Error!!! Página no encontrada</h2>
        <Link to="/">
            <button>
                <h5>Ir a Home</h5>
            </button>
        </Link>     
    </>
  )
}

export default Error404
import { useNavigate, useParams } from "react-router-dom";


const Persona = () => {
    const {nombre='TuNombre', apellido='TuApellido'} = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const nombre_ = e.target.nombre.value;
        const apellido_ = e.target.apellido.value;

        navigate(`/persona/${nombre_}/${apellido_}`);
    }

  return (
    <>
        <h3>Persona</h3>
        <h2>Hola {nombre} {apellido} !</h2>
        
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="nombre"
                placeholder="Ingrese su nombre"
            />
            <input 
                type="text"
                name="apellido"
                placeholder="Ingrese su apellido"
            />
            <input type="submit" value="Enviar" />
            <input type="reset" value="Reset" />         
        </form>
    </>
  )
}

export default Persona
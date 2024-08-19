import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [ formulario, setFormulario ] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const mensaje = e.target.mensaje.value;

    if(!nombre) {
      alert('Nombre requerido!');
      setFormulario("");
    } else if (!mensaje || mensaje === "") {
      alert('Debe escribir un mensaje');
      setFormulario("");
    } else {
        setFormulario(`El mensaje de ${nombre} se envió correctamente`);        
        e.target.nombre.value = "";
        e.target.mensaje.value = "";
    }
  };

  useEffect(() => {
    setTimeout(() => { 
      setFormulario("");
    }, 3000);
  }, [formulario]);
  
  return (
    <>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name="nombre"       
          placeholder="Ingrese su nombre: "
        /> 
        <br /><br />
        <textarea
          type="text"
          name="mensaje"       
          cols={30}
          rows={5}
          placeholder="Mensaje..."    
        /> <br />
        <input type="submit" value="Enviar" /> <br />
      </form>
      <br />
      
      <Link to="/">
        <button>
          <h4>Ir a Home</h4>
        </button>
      </Link>

      <h5>{formulario}</h5>  
    </>
  )
}

export default Contact
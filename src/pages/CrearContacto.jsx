import useGlobalReducer from "../hooks/useGlobalReducer";
import { crearNuevoContacto } from "../funciones/funcionesGlobales";
import { useEffect, useState } from "react";

export const CrearContacto = () => {

  // necesito guardar los datos de manera local mientras relleno los input, antes de enviar el formulario (con miContacto actualizado)
  const [miContacto, setMiContacto] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  })

  const { store, dispatch } = useGlobalReducer()

  // siempre que haya un input habrá un handleChange para guardar en mi estado el valor de los input
  const handleChange = (e) => {
    setMiContacto({
      ...miContacto,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    console.log(miContacto);
  }, [miContacto])

  // el handleSubmit será el que envie los datos pero como es asincrona con await delante, y para que no de error porque no se lo puedo pasar siendo asincrono a payload lo guardo en una variable, y es esa variable que guarda lo que me traigo con crearNuevoContacto lo que le paso como payload (los datos que recibo -> envio para actualizar el estado global)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const peticionCrearContacto = await crearNuevoContacto(miContacto) //tengo que pasarle como parametro a mi funcion crearNuevoContacto mi estado que es el que tiene de momento los datos (el objeto)
    dispatch({ type: 'crearContacto', payload: peticionCrearContacto })
    setMicontacto({
      name: "",
      phone: "",
      email: "",
      address: ""
    })
  }


  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="container mt-5 p-4 border rounded shadow">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" id="nombre"
            name="name"
            value={miContacto.name}
            onChange={handleChange}
            className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email"
            name="email"
            className="form-control"
            value={miContacto.email}
            onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección:</label>
          <input type="text" id="direccion"
            name="address"
            value={miContacto.address}
            onChange={handleChange}
            className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono:</label>
          <input type="tel" id="telefono"
            name="phone"
            value={miContacto.phone}
            onChange={handleChange}
            className="form-control" />
        </div>

        <button type="submit" className="btn btn-success w-30">Enviar</button>
      </form>




    </div>
  );
};

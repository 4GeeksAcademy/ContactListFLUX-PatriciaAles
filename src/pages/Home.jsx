import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {obtenerAgenda, obtenerContactos } from "../funciones/funcionesGlobales.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	// dispatch({ type: 'crearAgenda', payload: data })

	useEffect(() => {
		const miFetchparalaAgenda = async () => {
			const data = await obtenerAgenda()
			dispatch({type: 'crearAgenda', payload: data})
		}
		miFetchparalaAgenda()
	}, [])

	useEffect(() => {
		const miFetchparalosContactos = async () => {
			const data = await obtenerContactos()
			console.log(data);
			
			dispatch({type: 'obtenerContactos', payload: data})
			}
		miFetchparalosContactos()

	}, [])
	console.log("Contactos en store:", store.contactos);

	return (
		<div className="text-center mt-5">
			<h1>📖 Contact List 📖 </h1>

			{store.contactos?.map((elemento) => (
				<div className="card m-3 shadow-sm"
				key={elemento.id} 
				style={{ width: '30rem' }}>
					<div className="card-body">
						<h5 className="card-title">{elemento.name}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{elemento.email}</h6>
						<p className="card-text">
							<strong>Dirección:</strong>
							{elemento.address}
						</p>
						<p className="card-text">
							<strong>Teléfono:</strong>
							{elemento.phone}
						</p>
					</div>
				</div>

			))}

		</div>
	);
}; 
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { crearAgenda, obtenerAgenda, crearNuevoContacto } from "../funciones/funcionesGlobales.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	// dispatch({ type: 'crearAgenda', payload: data })

	useEffect(()=>{
		obtenerAgenda()
	}, [])



	return (
		<div className="text-center mt-5">
			<h1>📖 Contact List 📖 </h1>
			<div className="card m-3 shadow-sm" style={{ width: '30rem' }}>
				<div className="card-body">
					<h5 className="card-title">Patricia</h5>
					<h6 className="card-subtitle mb-2 text-muted">patriprueba@gmail.com</h6>
					<p className="card-text">
						<strong>Dirección:</strong>
						pasaje de cox piso 4c
					</p>
					<p className="card-text">
						<strong>Teléfono:</strong>
						692222333
					</p>
				</div>
			</div>
		</div>
	);
}; 
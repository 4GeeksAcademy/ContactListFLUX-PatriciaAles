import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { obtenerAgenda, obtenerContactos } from "../funciones/funcionesGlobales.js";
import { TarjetaDeContacto } from "./TarjetaDeContacto.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()


	useEffect(() => {
		const miFetchparalaAgenda = async () => {
			try {
				const data = await obtenerAgenda()
				dispatch({ type: 'crearAgenda', payload: data })
			} catch (error) {
				console.error("Error obteniendo la agenda:", error)
			}
		}
		miFetchparalaAgenda()
	}, [])

	useEffect(() => {
		const miFetchparalosContactos = async () => {
			try {
				const data = await obtenerContactos()
				console.log(data)
				dispatch({ type: 'obtenerContactos', payload: data })
				return data
			} catch (error) {
				console.error("Error obteniendo los contactos:", error)
			}
		}
		miFetchparalosContactos()
	}, [])


	// console.log("Contactos en store:", store.contactos);
	console.log("Nombre de la agenda: ---> ", store.agenda?.slug);


	return (
		<div className="text-center mt-5">
			<h1>📖 Contact List de: {store.agenda?.slug} 📖 </h1>
			{store.contactos?.map((elemento, _) => (
					<TarjetaDeContacto key={elemento.id} name={elemento.name} address={elemento.address} email={elemento.email} phone={elemento.phone}/>
			))}
		</div>
	);
}; 
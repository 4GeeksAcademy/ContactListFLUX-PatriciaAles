import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state


export const TarjetaDeContacto = ({ name, phone, email, address }) => {


    const { store, dispatch } = useGlobalReducer()


    return (
        <>
            <div className="card m-3 shadow-sm"
                style={{ width: '30rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                    <p className="card-text">
                        <strong>Dirección:</strong>
                        {address}
                    </p>
                    <p className="card-text">
                        <strong>Teléfono:</strong>
                        {phone}
                    </p>
                    <div className="boton-eliminar">
                        <span> ❌ </span>
                        <span> 📝 </span>
                    </div>
                </div>
            </div>
        </>
    )

}
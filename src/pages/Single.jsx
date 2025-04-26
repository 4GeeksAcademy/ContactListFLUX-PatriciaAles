import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state


export const Single = () => {

  
  const { store,dispatch } = useGlobalReducer()


  return (
    <p> aqui ira mi edit contacto</p>
  )

}
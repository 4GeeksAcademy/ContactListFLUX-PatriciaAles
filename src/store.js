export const initialStore=()=>{
  return{
    agenda: null,
    agendas: [],
    nuevoContacto: null,
    contactos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'crearAgenda':
      return {
        ...store,
        agenda: action.payload
      };
    case 'obtenerAgendas':
      return {
        ...store,
        agendas: action.payload
      }
    case 'crearContacto':
      return {
        ...store,
        nuevoContacto: action.payload
      }
    case 'obtenerContactos':
      return {
        ...store,
        contactos: action.payload
      }
    default:
      throw Error('Unknown action.');
  }    
}

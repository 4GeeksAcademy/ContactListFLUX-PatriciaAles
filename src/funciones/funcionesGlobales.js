
export const crearAgenda = async () => {
    try {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/Calenine', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        })
        if (response.ok) {
            const data = await response.json()
            console.log("estos son los datos: ---> ", data);
        } else {
            console.log("Ya existe la agenda");
        }

    } catch (error) {
        console.log("hubo un error al crear la agenda", error);

    }
}

export const obtenerAgenda = async () => {
    try {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/Calenine')
        if (!response.ok){
            const create = await crearAgenda()
            console.log("se tuvo que crear la agenda --> " ,create); 
        } else {
            const data = await response.json()
            console.log("se pudo obtener la agenda: -->", data);
            
        }
    } catch (error) {
        console.log("error al obtener la agenda", error);
        
    }
}

export const crearNuevoContacto = async (nuevocontacto) => {
    try {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/Calenine/contacts',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevocontacto)
        })
        const data = await response.json()
        console.log("estos son los datos del contacto nuevo: ", data);
        
    } catch (error) {
        console.log("hubo un error: ", error);
        
    }
}

export const obtenerContactos = async () => {

}
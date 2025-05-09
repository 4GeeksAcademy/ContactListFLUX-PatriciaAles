
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
            return data
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
            return create
        } else {
            const data = await response.json()
            console.log("se pudo obtener la agenda: -->", data);
            return data
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
    try {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/Calenine/contacts')
        const data = await response.json()
        console.log("trayendo contactos --->: ", data)
        return data.contacts; // ----> super importante que devuelva la peticion (data) y el array que contiene los contactos
        
    } catch (error) {
        console.log("No se pudieron traer los contactos ", error);
        
    }
}
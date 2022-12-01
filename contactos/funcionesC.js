const  guardandoContacto = (db, contacto) =>{
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = ''
}

const cargarContacto = (db, parentNode) =>{
    let claves = Object.keys(db)
   
    for(clave of claves){
        let contacto = JSON.parse(db.getItem(clave))
       crearContacto(parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let correoContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')
    let iconosEditar = document.createElement('span')

nombreContacto.innerHTML = contacto.nombre 
numeroContacto.innerHTML = contacto.numero 
correoContacto.innerHTML = contacto.correo
iconoBorrar.innerHTML = 'delete'
/**iconosEditar.innerHTML = 'editing'*/


divContacto.classList.add('tarea')
iconoBorrar.classList.add('material-icons', 'icono')

/**divContacto.classList.add('tarea')
iconosEditar.classList.add('material-icons', 'iconos')*/

iconoBorrar.onclick = () =>{
       db.removeItem(contacto.id)
       window.location.href = ''
}

iconosEditar.onclick = () =>{
    db.removeItem(contacto.id)
    window.location.href = ''
}

divContacto.appendChild(nombreContacto)
divContacto.appendChild(numeroContacto)
divContacto.appendChild(correoContacto)
divContacto.appendChild(iconoBorrar)
/**divContacto.appendChild(iconosEditar)*/

parentNode.appendChild(divContacto)

}


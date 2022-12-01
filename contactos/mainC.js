const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const correo = document.querySelector('.correo')
const btnAgregar = document.querySelector('.btn-agregar')

const listado = document.querySelector('.listado')

const db = window.localStorage

btnAgregar.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        correo: correo.value,
    }
    guardandoContacto(db, contacto)
}

cargarContacto(db, listado)










































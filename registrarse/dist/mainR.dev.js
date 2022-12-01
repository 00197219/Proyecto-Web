"use strict";

var nombre = document.getElementById("myname");
var apellidos = document.getElementById("surname");
var correo = document.getElementById("email");
var celular = document.getElementById("mobile");
var contrasenia = document.getElementById("password");
var contrasenia2 = document.getElementById("repeatPassword");
var terminosYcondiciones = document.getElementById("termsAndConditions");
var form = document.getElementById("form");
var listInputs = document.querySelectorAll(".form-input");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var condicion = validacionForm();

  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  var condicion = true;
  listInputs.forEach(function (element) {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("myname", "Nombre no valido*");
    condicion = false;
  }

  if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
    mostrarMensajeError("surname", "Apellido no valido");
    condicion = false;
  }

  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("email", "Correo no valido*");
    condicion = false;
  }

  if (celular.value.length != 9 || celular.value.trim() == "" || isNaN(celular.value)) {
    mostrarMensajeError("mobile", "Celular no valido*");
    condicion = false;
  }

  if (contrasenia.value.length < 1 || contrasenia.value.trim() == "") {
    mostrarMensajeError("password", "Contraseña no valido*");
    condicion = false;
  }

  if (contrasenia2.value != contrasenia.value) {
    mostrarMensajeError("repeatPassword", "Contraseña error*");
    condicion = false;
  }

  if (!terminosYcondiciones.checked) {
    mostrarMensajeError("termsAndConditions", "Acepte*");
    condicion = false;
  } else {
    mostrarMensajeError("termsAndConditions", "");
  }

  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  var elemento = document.querySelector(".".concat(claseInput));
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "Listo !!";
}
//# sourceMappingURL=mainR.dev.js.map

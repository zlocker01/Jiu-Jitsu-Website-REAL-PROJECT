document.addEventListener('DOMContentLoaded', function(){
//ocultar al navbar
const checkBox = document.getElementById('menu');
const navLinks = document.querySelectorAll('.nav__menu a');

navLinks.forEach( link => {
    link.addEventListener('click', () => {
    checkBox.checked = false;
    });
});

//validacion del formulario
//varables
const email = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const button = document.querySelector('#button__form');

//eventos
nombre.addEventListener('input', validarFormulario);
correo.addEventListener('input', validarFormulario);
mensaje.addEventListener('input', validarFormulario);

//funciones
function validarFormulario(e){
if(e.target.value.trim() === ''){
    mostrarAlerta(`El ${e.target.id} es obligatorio`, e.target.parentElement);
    email[e.target.id] = '';
    comprobarEmail();
    return;
}
    if(e.target.id === 'email' && !validarEmail(e.target.value)){
        mostrarAlerta('El Email no es valido', e.target.parentElement);
        email[e.target.id] = '';
        comprobarEmail();
        return;
    };
    
    limpiarAlerta(e.target.parentElement);

    email[e.target.id] = e.target.value.trim().toLowerCase(); 

    comprobarEmail();
}

function mostrarAlerta(mensaje, referencia){
    limpiarAlerta(referencia);

    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    referencia.appendChild(alerta);

    alerta.className= 'alerta';
    alerta.style.background = 'red';
    alerta.style.color = 'white';
    alerta.style.textAlign = 'center';
    alerta.style.fontSize = '.9375rem';
    alerta.style.fontWeight = '600';
    alerta.style.margin = '0 0 1.25rem 0';
}

function limpiarAlerta(referencia){
    const errorAlerta = referencia.querySelector('.alerta');
    if(errorAlerta){
        errorAlerta.remove();
    }
}

function validarEmail(email){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    const resultado = regex.test(email);
    return resultado;
}

function comprobarEmail(){
    if(Object.values(email).includes('')){
        button.disabled = true;
        return;
    }
        button.disabled = false;
}
});
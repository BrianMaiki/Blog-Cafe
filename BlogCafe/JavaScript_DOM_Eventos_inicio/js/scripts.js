// querySelector
//const heading = document.querySelector("#heading"); // 0 o 1 elemento
//console.log(heading);


// querySelectorAll
//const enlaces = document.querySelectorAll(".navegacion a");
//console.log(enlaces);
//enlaces[2].textContent = "nashe"


//GENERAR UN NUEVO ENLACE
const nuevoEnlace = document.createElement('A');
//crear href
nuevoEnlace.href = 'nuevo-enlace-html';
//crear texto
nuevoEnlace.textContent = 'nashei';
//crear clase
nuevoEnlace.classList.add('navegacion__enlace');
//agregar al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);




console.log(nuevoEnlace);


//eventos
/*
window.addEventListener('load', function(){ //espera a que se descargue TODO
    console.log(2);
});

document.addEventListener('DOMContentLoaded', function(){// espera a que se descargue solo el HTML
    console.log(3);
})
*/
// seleccionar elementos y asociarles un evento
/*
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('clicl', function(evento){
    console.log(evento);
    evento.preventDefault();
    //validar formulario
    console.log('enviando formulario...');
});

*/







//eventos de los inputs y textarea
const datos = {
    nombre:'',
    email:'',
    mensaje:''
}



const nombreInput = document.querySelector('#nombre',);
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombreInput.addEventListener('input', leerTexto);
emailInput.addEventListener('input', leerTexto);
mensajeInput.addEventListener('input', leerTexto);
// evento de submit
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    //validar el formulario
    const { nombre, email, mensaje } = datos;
    if( nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('todos los campos son obligatorios', 'error');
        return;
    } 
    //crear alerta de enviar correctamente  
    mostrarAlerta('Se envio exitosamente');
});

function leerTexto(e){

    datos[e.target.id] = e.target.value;
    //console.log(datos);
}
//crear alerta
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error')
    } else {
        alerta.classList.add('correcto')
    }
    formulario.appendChild(alerta);
    // hacer que desaparezca la alerta
    setTimeout(()=>{
        alerta.remove();
    },5000);
}



 





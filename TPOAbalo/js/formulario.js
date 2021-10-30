var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var telefono = document.getElementById('telefono');
var empresa = document.getElementById('empresa');
var mensaje = document.getElementById('mensaje');

var error = document.getElementById('error');
error.style.color = 'red';

/*function enviarFormulario(){
    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresar nombre');
    }
    if(email.value === null || nombre.value === ''){
        mensajesError.push('Ingresar correo electrónico');
    }
    /*if(telefono.value === null || nombre.value === ''){
        mensajesError.push('Ingresar nombre');
    }
    if(empresa.value === null || nombre.value === ''){
        mensajesError.push('Ingresar nombre');
    }
    if(mensaje.value === null || nombre.value === ''){
        mensajesError.push('Ingresar mensaje');
    }

    error.innerHTML = mensajesError.join(', ');

    return false;
}*/


/* segunda opcion */

var form = document.getElementById('formulario');
    form.addEventListener('submit', function(_evento){
        _evento.evepreventDefault();
        
            var mensajesError = [];
        
            if(nombre.value === null || nombre.value === ''){
                mensajesError.push('Ingresar nombre');
            }
            if(email.value === null || nombre.value === ''){
                mensajesError.push('Ingresar correo electrónico');
            }
            /*if(telefono.value === null || nombre.value === ''){
                mensajesError.push('Ingresar nombre');
            }
            if(empresa.value === null || nombre.value === ''){
                mensajesError.push('Ingresar nombre');
            }*/
            if(mensaje.value === null || nombre.value === ''){
                mensajesError.push('Ingresar mensaje');
            }
        
            error.innerHTML = mensajesError.join(', ');
        
            return false;
        }
    );
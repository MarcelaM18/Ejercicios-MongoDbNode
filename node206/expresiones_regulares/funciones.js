const  validar =() =>{
    const expresionDocumento = /^\d{5,10}$/
    const expresionNombre =/^[a-zA-Z]{1,100}$/
    let errores=''

    const documento = document.getElementById('documento').value
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const email= document.getElementById('email').value
    const telefono= document.getElementById('telefono')

    if(!expresionDocumento.test(documento)){

        errores +='El documento debe ser solo numerico y contenga entre 5 y 10 digitos \n'
        document.getElementById('error').innerText =errores
    }
    
    if(!expresionNombre.test(nombre)){

        errores +='El nombre debe ser solo letras  \n'
    }
    document.getElementById('error').innerText =errores
}

document.querySelector('#btnRegistrar')
.addEventListener('click',()=> validar())
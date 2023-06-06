const listarDatos = async() => {
    let respuesta=''
    let body = document.getElementById('contenido')
    const url = 'http://localhost:8082/api/usuario'
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {"Content-type": "application/json; charset=UTF-8"}})
    .then((resp)=>resp.json())//convierte a json 
    .then(function (data) {
        let listarUsuarios = data.usuarios
        return listarUsuarios.map(function(usuario){
            respuesta += `<tr><td>${usuario.nombre}</td>`+
            `<td>${usuario.rol}</td>`+
            `<td>${usuario.estado}</td></tr>`

            body.innerHTML = respuesta
        
        })
        console.log(data)
        
    })
   
                     
    
    
}

const registrarDatos = async () => {
    const url = 'http://localhost:8082/api/usuario'
    let body = document.getElementById('contenido1')
    let _nombre = document.getElementById('nombre').value
    let _pass = document.getElementById('pass').value
    let _confirPassword = document.getElementById('confirmpass').value
    let _rol = document.getElementById('rol').value
    let _estado = document.getElementById('estado').value

    alert(_pass+ ' ' + _confirPassword)

    if(_pass.length >0 && _confirPassword.length>0 && _pass == _confirPassword ){
        let _usuario = {
            nombre: _nombre,
            password: _pass,
            rol: _rol,
            estado: _estado       }

            fetch(url, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(_usuario),//convierte un o
                headers: {"Content-type": "application/json; charset=UTF-8"}})
            .then((resp)=>resp.json())//convierte a json 
            .then(json => {
                alert(json.msg)

            })
    }else{
        alert('El password y confirmación no coinciden, por favor corregir')
    }


}



//modificarr

const modificarDatos = async () => {
    const url = 'http://localhost:8082/api/usuario'
    let body = document.getElementById('contenido1')
    let _nombre = document.getElementById('nombre').value
    let _pass = document.getElementById('pass').value
    let _confirPassword = document.getElementById('confirmpass').value
    let _rol = document.getElementById('rol').value
    let _estado = document.getElementById('estado').value

    alert(_pass+ ' ' + _confirPassword)

    if(_pass.length >0 && _confirPassword.length>0 && _pass == _confirPassword ){
        let _usuario = {
            nombre: _nombre,
            password: _pass,
            rol: _rol,
            estado: _estado       }

            fetch(url, {
                method: 'PUT',
                mode: 'cors',
                body: JSON.stringify(_usuario),//convierte un o
                headers: {"Content-type": "application/json; charset=UTF-8"}})
            .then((resp)=>resp.json())//convierte a json 
            .then(json => {
                alert(json.msg)

            })
    }else{
        alert('El password y confirmación no coinciden, por favor corregir')
    }


}
if(
    document.querySelector('#btnRegistrar').addEventListener('click', registrarDatos)){
    document.querySelector('#btnRegistrar')
    .addEventListener('click', registrarDatos)
    }

if(document.querySelector('#Actualizar').addEventListener('click', modificarDatos)){
    document.querySelector('#Actualizar').addEventListener('click', modificarDatos)
}

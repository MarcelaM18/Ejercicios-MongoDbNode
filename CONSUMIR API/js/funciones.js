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

document.getElementById('contenido')
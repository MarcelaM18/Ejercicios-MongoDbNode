const Usuarios = [
    {
    usuario:"Marcela18",
    contraseña:"marce1998"
    },
    {
    usuario:"Julieth27",
    contraseña:"tatis100"
    },
]

verificarUsuario=()=>{
  let  user=document.getElementById('usuario').value
  let  password=document.getElementById('contraseña').value
return new Promise((resolve, reject) => {
      encontrado=false
    for(let i=0; i<Usuarios.length; i++){
        if(Usuarios[i].usuario == user && Usuarios[i].contraseña == password ){
            encontrado=true
        }
        if(encontrado){
            resolve("Usuario "+user+" encontrado")
            window.location.href="bienvenida.html"

        }
        else
        {
           reject (alert('Usuario '+user+' no encontrado'))
        }
    }
})
    
}

document.querySelector('#btnVerificar')
.addEventListener('click', ()=> verificarUsuario())
.then(mensaje => console.log(mensaje))
.catch(error => console.log(error));
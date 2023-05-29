let Aprendices =[10,11,21,23,30,40];
let Promedio = [4,3.5,4.94,3.01,2.94,4.21];

buscarAprendices = (Aprendices) =>{
let  datoBuscar= document.getElementById('documento').value
let posicion = 0
    console.log('-----'+datoBuscar)
    encontrado = false;
    for(let i = 0; i<Aprendices.length; i++)
        if(Aprendices[i]== datoBuscar){
            posicion=i
            encontrado = true;
        }

    if (encontrado){
        buscarPromedio(Aprendices, Promedio,posicion)
        console.log("Aprendiz Encontrado ")
    }
}

buscarPromedio = (Aprendices, Promedio, posicion) => {
    console.log('El promedio de  '+ Aprendices[posicion]+' es: '+Promedio[posicion])
}



document.querySelector('#btnBuscar')
.addEventListener('click', ()=>buscarAprendices(Aprendices))

  
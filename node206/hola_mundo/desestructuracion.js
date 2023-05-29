

//Desestructuracion de arrays para meter elementos de un array en variables 
const Aprendices = ['Maria','Lina','Carmen','Marcela','Monica']
const [n1,n2,n3,n4,n5]=Aprendices

console.log(n3)

//Desestructurar onjetos

mascota = {
    nombre: 'Perla',
    tipo: 'Perra',
    raza: 'Chandowerman'
}

const {nombre,tipo,raza}=mascota

console.log(nombre + ' ' + raza)


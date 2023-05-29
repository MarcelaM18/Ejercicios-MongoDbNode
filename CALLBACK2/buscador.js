const Empleados = [
    {
    documento:1010,
    nombre:"Maria Santa"
    },
    {
    documento:2323,
    nombre:"Inés Pereque"
    },
]

const Salarios = [
    {
    documento:1010,
    salario:1200000
    },
    {
    documento:2323,
    salario:1100000
    },
]

buscarEmpleado=(datoBuscar)=>{
    encontrado=false
    for(let i=0; i<Empleados.length; i++){
        if(Empleados[i].documento == datoBuscar){
            encontrado=true
        }
        if(encontrado){
            return "El empleado "+datoBuscar+" encontrado"
        }
        else
        {
            return ('Empleado no encontrado')
        }
    }
    
}

buscarSalario = (datoBuscar)=>{
    encontrado=false
    indice=0
    for(let i=0; i<Salarios.length; i++){
        if(Salario[i].documento == datoBuscar){
            encontrado=true
            indice=i
        }
    }
    
}

document.querySelector('#btnEmpleado')
.addEventListener('click', ()=>console.log(buscarEmpleado(document.getElementById('documento').value)))
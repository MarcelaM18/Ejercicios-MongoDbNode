//Desestructurar un objeto de su proyecto
compra1 = {
    numeroFactura: 1234,
    fechaCompra: '02-05-2023',
    Proveedor: 'Laboratorios Athos',
    totalCompra: 345.000
}

const {numeroFactura,fechaCompra,Proveedor,totalCompra} = compra1
 
console.log(numeroFactura + '  ' + fechaCompra + '  ' + Proveedor + '  ' + totalCompra)


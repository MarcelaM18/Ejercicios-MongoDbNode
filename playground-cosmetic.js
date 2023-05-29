use('cosmeTIC')
db.createCollection('Compras')
db.createCollection('Detalle_Compra')
db.createCollection('Categoria_Productos')



db.Categoria_Productos.insertMany([
{
nombre:"Belleza",
estado:"Activo",
observacion:"Esta categoria aplica para productos como labiales, sombras, rubores ect"
}
,
{
nombre:"Deportiva",
estado:"Activo",
observacion:"Esta categoria aplica para productos como licras, bandas elasticas , mancuernas  "
}

])
//crear registro
db.Categoria_Productos.updateOne(
    {nombre:{$eq:"Deportiva" }},
    {$set:{"nombre":"Limpieza Facial"}}
)
//editar registro


//agregar un campo
db.Categoria_Productos.updateOne({"documento": 1007625559}, {$set: {"edad": 22}})


//eliminar un campo
db.Categoria_Productos.deleteOne({"documento": 1007625559}, {$unset: {"edad": 22}})


db.Compras.insertMany([
{
    id_proveedor: ObjectId('64485476778f8b1b28aa835d'),
    num_factura_comprada: 702,
    fecha_compra: "01/04/2023",
    fecha_registro:"03/04/2023",
    total_compra:250,
    estado_compra:"Activo",
    observacion:"factura de compra activa ",
    
    
}
,
 { 
    
    id_proveedor:ObjetcId('644bc696f03a4049d6c79597'),
    num_factura_comprada:712,
    fecha_compra:"05/04/2023",
    fecha_registro:"08/04/2023",
    total_compra:350,
    estado_compra:"Activo",
    observacion: "factura de compra activa "
 }

    ])

db.detalle_compra.insertOne(
    {
        
id_compra:ObjectId('64486bb06bacdbc3beea495d'),
id_proveedor:ObjectId('64485476778f8b1b28aa835d'),
num_factura_comprada:702,
fecha_compra:"01/04/2023",
fecha_registro:"03/04/2023",
total_compra:250,
estado_compra:"Activo",
observacion:"factura de compra activa ",
productos:[
    {
        
id_producto:ObjectId('644848d1a520834b8ce044b4'),
Categoria_Productos:"Belleza",
cantidad:10,
precio_compra:10,
precio_venta:15,
total_cantidad:150
    },
    {
        
id_producto:ObjectId('644848d1a520834b8ce044b4'),
Categoria_Productos:"Belleza",
cantidad:9,
precio_compra:8,
precio_venta:12,
total_cantidad:258
    }

]
 
   }
)

db.detalle_compra.insertOne(
    {
        
id_compra:ObjectId('64486bb06bacdbc3beea495e'),
id_proveedor:ObjectId('644bc696f03a4049d6c79597'),
num_factura_comprada:712,
fecha_compra:"05/04/2023",
fecha_registro:"08/04/2023",
total_compra:350,
estado_compra:"Activo",
observacion:"factura de compra activa ",
productos:[
    {
        
id_producto:ObjectId('644848d1a520834b8ce044b4'),
Categoria_Productos:"Belleza",
cantidad:10,
precio_compra:10,
precio_venta:15,
total_cantidad:150
    },
    {
        
id_producto:ObjectId('644848d1a520834b8ce044b4'),
Categoria_Productos:"Belleza",
cantidad:9,
precio_compra:8,
precio_venta:12,
total_cantidad:258
    }

]
 
   }
)
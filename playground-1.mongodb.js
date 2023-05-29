

use('mongo_206')

db.instructores.insertOne({
    "documento": 1035129796,
    "nombre": "Marcela",
    "apellido": "Morales"

}
)

db.instructores.insertOne({
    "documento":1045143888,
    "nombre": "Julieth Tatiana ",
    "apellido": "Betancur Moreno",
    "email":"tatiana@gmail.com"
})
db.instructores.insertOne({
    "documento":1234567,
    "nombre": "Maritza  ",
    "apellido": "Moreno Maturana",
    "email":"maritza@gmail.com"
})


db.instructores.find()


db.instructores.insertMany([
{
    "documento":1007625559,
    "nombre":"Andres Felipe Moreno",
    "apellido":"Moreno Maturana",
    "email":"andres@gmail.com"
},

{
    "documento":45675899,
    "nombre":"Nathalia",
    "apellido":"Machado Moreno",
    "email":"natalia@gmail.com"
}
])

//cambiar el campo de un documento
db.instructores.updateOne(
    {documento:{$eq:45675899 }},
    {$set:{"documento":123345}}
)
//buscar un documento en especifico de una colletion
db.instructores.find({documento:123345})

//cuenta el registro de documentos que hay en una colletion
db.instructores.countDocuments()

//eliminar un documento de una coleccion
db.instructores.deleteOne({"documento":123345})

//agregar un campo a un documento en especifico
db.instructores.updateOne({"documento": 1007625559}, {$set: {"edad": 22}})
db.instructores.updateOne({"documento": 1234567}, {$set: {"edad": 49}})


db.instructores.find({documento:1007625559})

//eliminar  un campo de un documento  en espefico  de un documento
db.instructores.deleteOne({"documento": 1007625559}, {$unset: {"edad": 22}})
db.instructores.deleteOne({"documento": 1234567}, {$unset: {"edad": 49}})

//eliminar varios docuementos
db.instructores.deleteMany(
    {
    documento:
    {
        $in:[1035129796,1045143888]
    }
}
)

db.instructores.find().forEach(instructores=>print("Nombre: "+instructores.nombre + ' '+ instructores.apellido))
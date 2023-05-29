const {Schema,model, default: mongoose} = require('mongoose')

//Migracion de base de datos 
const UsuarioSchema = new Schema ({
    nombre:{
        type: String,
        required: [true, 'El campo nombre es requerido']
    },
    password:{
        type: String,
        required:[true, 'El password es requerido']
    },
    rol:{
        type:String,
        required:true,
        enum:['Admin','Asesor']
    },
    estado:{
        type:Boolean,
        required:[true,'El estado es obligatorio'],
        default:true
    }

})

module.exports = model('Usuario',UsuarioSchema)//Exportar el modelo 
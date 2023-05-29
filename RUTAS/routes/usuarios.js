const {Router} = require('express') //se llama la clase routes de la libreria express

const route = Router()//para especificar 

route.get('/', (req,res)=>{
    res.json({
        msg:'API GET'
    })
})


route.post('/', (req,res)=>{
    res.json({
        msg:'API POST'
    })
})


route.put('/', (req,res)=>{
    res.json({
        msg:'API PUT'
    })
})

route.delete('/', (req,res)=>{
    res.json({
        msg:'API DELETE'
    })
})

module.exports = route
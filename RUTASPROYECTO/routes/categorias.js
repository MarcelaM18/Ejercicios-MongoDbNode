const {Router} = require('express') //se llama la clase routes de la libreria express

const route = Router()//para especificar 

route.get('/', (req,res)=>{
    res.json({
        msg:'API GET CATEGORIA'
    })
})


route.post('/', (req,res)=>{
    res.json({
        msg:'API POST CATEGORIA'
    })
})


route.put('/', (req,res)=>{
    res.json({
        msg:'API PUT CATEGORIA'
    })
})

route.delete('/', (req,res)=>{
    res.json({
        msg:'API DELETE CATEGORIA'
    })
})

module.exports = route
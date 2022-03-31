const user = require('../../models/user')
const User  = require('../../models/user')

function test(req,res){
    
User.create({
    name:'Marshall',
    password:'1234',
    estado:true
}).then(() => {
res.send('El usuario se creo')
}).catch((err)=>{
console.log(err.toString())
res.send('Ups el usuario no se creo ' + err.toString())
})
}

function create(req,res){
return res.render('/back/user/create')
}
function store(req,res){
    const params = req.body
    if(!params.name || !params.password) return res.send('Ups... Completa el formulario')

    user.create({
        name: params.name,
        password:params.password
    }).then(()=> {
 return res.send(params)
    }).catch((err)=>{
     console.log(err)
     return res.send('Ups errorrr ' + err.toString())
    })


    console.log(params)
}

function list(req, res){
User.find({
    name:'Marshall'
}).then((users)=>{
return res.send(users).json()
}).catch((err)=>{
console.error('Ups error: ' + err.toString())
})
}


module.exports = {
    test,
    create,
    store,
    list

}
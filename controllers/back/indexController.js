function index(req,res){
    res.send({hola: 'hola'}).json()
}

function test(req,res){
    res.send({test:true}).json()
}

module.exports = {
    index,
    test
}
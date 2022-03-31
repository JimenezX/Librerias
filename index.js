const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


//Routes
const routesBack = require('./routes/back/routes')
const routesFront = require('./routes/front/routes')

//Config
const app = express()
const PORT = 8002

//vistas
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs' , exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layout'),
  partialsDir: path.join(app.get('views'), 'Partials'),
  extname: '.hbs'
}))
app.set('view engine', '.hbs')

//middlewares
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Rutas
//back
app.use('/back', routesBack)
//Front
app.use('/', routesFront )

//connect mongoose

mongoose.connect('mongodb://localhost:27017/tarea').then(() => {
console.log('Mongo conectado correctamente')
app.listen(PORT, function(err){
  if (err) console.log(err)

  console.log('Servidor funcionando en el puerto ' + PORT)

})


}).catch((err)=>{
  console.log('Error al conectar con mongo')
  console.log('err')
})



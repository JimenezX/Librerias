const express = require('express')
const path = require('path')
let exphbs = require('express-handlebars')

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

//Rutas
app.get('/', function (req, res) {
  res.render('index')
})

app.get('/inicio', function (req, res) {
    res.render('inicio')
  })

app.listen(PORT, function(err){
  if (err) console.log(err)

  console.log('Servidor funcionando en el puerto ' + PORT)
  console.log(__dirname)
})


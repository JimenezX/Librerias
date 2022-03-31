const express = require('express')
const app = express.Router()


app.get('/', function (req, res) {
    res.render('index', {title: 'test'})
  })
  
  app.get('/inicio', function (req, res) {
      res.render('inicio', {title:'Regresa'})
    })

    
module.exports = app
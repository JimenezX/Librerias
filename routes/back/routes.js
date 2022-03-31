const express = require('express')
const app = express.Router()
const indexController = require('../../controllers/back/indexController')
const userController = require('../../controllers/back/userController')


app.get('/',indexController.index)
app.get('/test', userController.test)

//User
app.get('/user/index-user', userController.create)
app.post('/user/index-user', userController.store)
app.get('/user', userController.list)

module.exports = app
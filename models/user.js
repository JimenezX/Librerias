const mongoose = require('mongoose')
const Schema = mongoose.Schema


var UserSchema = Schema({
    name:{type: String,required:true},
    password:{type: String, required:true},
    Estado:Boolean
},
{timestamps:true})

module.exports = mongoose.model('User', UserSchema)
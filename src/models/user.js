const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    nome: {type:String , required:true},
    idade: {type:Number , required:true},
    senha: {type:String , required:true},
});

module.exports = mongoose.model("users", userModel);
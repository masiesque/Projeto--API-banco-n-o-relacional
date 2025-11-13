//rotas
const RouteUsers = require('./routers/user');


//rotas
//COM DOTENV
require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const express = require('express')
const app = express();
app.use(express.json());
app.use(RouteUsers);
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL_CONECTION).then(()=>{
    console.log("Api conectada ao Banco de Dados !")
    app.emit("OK, conectado");
})

app.on("OK, conectado", ()=>{
    app.listen(process.env.PORT, ()=>
{
    console.log("Servidor rodando na porta 3000");
})

} )








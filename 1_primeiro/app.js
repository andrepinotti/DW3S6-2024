//importa as bibliotecas
const express = require("express");
require("dotenv").config();
//Configura o servidor
const app = express();
const port = process.env.PORT;
//cria a rota
app.get("/", (req, res) => {
    res.send("Hello DW3!");
});

//inicia o servidor
app.listen(port, ()=>{
    console.log("Executando a aplicação:" , process.env.APP_NAME);
    console.log("Example app listening on port:", port);
});

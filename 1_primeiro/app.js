// @ Importa as bibliotecas
const express = require('express');
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.end("Hello DW3!");
});

app.listen(port, () => {
    console.log("Executando a aplicação:", process.env.APP_NAME);
    console.log("Example app listening on port:", port);
});


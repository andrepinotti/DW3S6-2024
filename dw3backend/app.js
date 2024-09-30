const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const router = require("./routes/router.js");
const pool = require("./database/databaseconfig.js");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false, }));
app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`API listening at the port ${port}`);
});



const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//Iniciando App
const app = express();
app.use(express.json());
app.use(cors());
//Conexão com o banco de dados
mongoose.connect(
    'mongodb://localhost/nodeapi', 
    { useNewUrlParser: true }
);

requireDir('./src/models');

app.use("/api", require("./src/routes"));

app.listen(8000);
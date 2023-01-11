const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors()) // middleware para permitir el acceso a la API desde cualquier origen 

app.use(express.json());

app.use('/api/usuario', require('./routes/usuario'));

app.listen(8080, () => {
    console.log('El servidor esta corriendo perfectamente')
})
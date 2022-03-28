const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const rutas_lab11 = require('./lab11.routes.js');
const rutas_lab10 = require('./lab10.routes.js');

//Rutas
app.use('/', rutas_lab11);
app.use('/lab10', rutas_lab10);

// 404 handler
app.use((req, res, next) => {
    res.status(404).send("Error 404: Ruta no encontrada");
})
app.listen(5000);
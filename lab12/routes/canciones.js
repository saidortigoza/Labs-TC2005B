const express = require('express');
const router = express.Router()

const filesystem = require('fs');

const path = require('path');

const canciones = ["Ribs by Lorde", "Team by Lorde", "Meet Me Halfway by Black Eyed Peas"];

router.get("/", (request, response) => {
    console.log("Someone has entered Canciones")
    response.render('canciones', {canciones: canciones});
});

router.get("/new", (request, response) => {
    console.log("Someone has entered Canciones New");
    response.render('cancionesNew');
});

router.post("/new", (request, response) => {
    console.log("Posted");
    console.log(request.body);
    canciones.push(request.body.nombre);
    console.log(canciones);
    //filesystem.writeFileSync('canciones.txt', canciones.toString());
    response.redirect('/canciones/');
    response.end();
});

module.exports = router;
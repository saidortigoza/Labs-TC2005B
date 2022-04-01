const express = require('express');
const router = express.Router()

const filesystem = require('fs');

const path = require('path');

const series = ["Game of Thrones", "Demon Slayer", "Euphoria"];

router.get("/", (request, response) => {
    console.log("Someone has entered Series")
    response.render('series', {series: series});
});

router.get("/new", (request, response) => {
    console.log("Someone has entered Series New");
    response.render('seriesNew');
});

router.post("/new", (request, response) => {
    console.log("Posted");
    console.log(request.body);
    series.push(request.body.nombre);
    console.log(series);
    //filesystem.writeFileSync('canciones.txt', canciones.toString());
    response.redirect('/series/');
    response.end();
});

module.exports = router;
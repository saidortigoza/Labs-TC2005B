const express = require('express');
const router = express.Router()

const filesystem = require('fs');

const path = require('path');

const controllerCanciones = require('../controllers/canciones-controller')

router.get("/", controllerCanciones.homeCanciones);

router.get("/new", controllerCanciones.nuevaCancion);

router.post("/new", controllerCanciones.postNuevaCancion);

module.exports = router;
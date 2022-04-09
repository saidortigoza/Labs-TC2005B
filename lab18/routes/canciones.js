const express = require('express');
const router = express.Router()

const filesystem = require('fs');

const path = require('path');

const controllerCanciones = require('../controllers/canciones-controller')
const isAuth = require("../controllers/is-auth.js");

router.get("/", isAuth, controllerCanciones.homeCanciones);

router.get("/new", isAuth, controllerCanciones.nuevaCancion);

router.post("/new", isAuth, controllerCanciones.postNuevaCancion);

router.get("/:id_cancion", isAuth, controllerCanciones.getCancion);

module.exports = router;
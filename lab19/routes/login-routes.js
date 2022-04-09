const express = require('express');
const router = express.Router()

const filesystem = require('fs');

const path = require('path');

const controllerLogin = require('../controllers/login-controllers');
const isAuth = require("../controllers/is-auth.js");

router.get("/", controllerLogin.make_login);

router.post("/", controllerLogin.login);

router.get("/logout", controllerLogin.logout);

router.get("/signup", isAuth, controllerLogin.get_signup);

router.post("/signup", controllerLogin.post_signup);

module.exports = router;
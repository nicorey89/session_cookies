var express = require('express');
var router = express.Router();
var {index, send, next, olvidar} = require("../controllers/indexController")
var validation = require("../validations/validation")
/* GET home page. */
router.get('/', index)
router.post('/', validation, send)
router.get("/hola", next)
router.post("/hola", olvidar);

module.exports = router;

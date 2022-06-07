var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/position", function (req, res) {
    usuarioController.trazerPosi(req, res);
});

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});
router.get("/funcYamaha", function (req, res) {
    usuarioController.funcYamaha(req, res);
});

router.get("/funcHonda", function (req, res) {
    usuarioController.funcHonda(req, res);
});

router.get("/funcSusuki", function (req, res) {
    usuarioController.funcSusuki(req, res);
});

router.get("/funcBmw", function (req, res) {
    usuarioController.funcBmw(req, res);
});

router.get("/funcTriumph", function (req, res) {
    usuarioController.funcTriumph(req, res);
});

module.exports = router;
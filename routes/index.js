var express = require('express');
var router = express.Router();
const loginController = require('../controllers/login');
const cadastroController = require('../controllers/cadastro');
const clienteController = require('../controllers/cliente');
const prestadorController = require("../controllers/prestador");
const auth = require('../middlewares/auth');

/* GET home page. */
router.get('/', clienteController.index);

router.get('/inicioCliente', auth, clienteController.inicioCliente);

router.get('/inicioPrestador', auth, prestadorController.inicioPrestador);

router.get('/servicos', auth, clienteController.servicos);

router.get('/servicosContratados', auth, clienteController.servicosContratados);

router.post('/login', loginController.login);

router.post('/cadastro', cadastroController.cadastro);

router.post('/servico', prestadorController.cadastrarServico);

router.post('/excluirServico', prestadorController.excluirServico);

router.post('/editarServico', prestadorController.editarServico);

module.exports = router;

var express = require('express');
var router = express.Router();
const loginController = require('../controllers/login');
const cadastroController = require('../controllers/cadastro');
const clienteController = require('../controllers/cliente');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inicioCliente', function(req, res, next) {
  res.render('inicioCliente', { title: 'Express' });
});

router.get('/inicioPrestador', function(req, res, next) {
  res.render('inicioPrestador', { title: 'Express' });
});

router.get('/servicos', function(req, res, next) {
  res.render('servicos', { title: 'Express' });
});

router.post('/login', loginController.login);

router.post('/cadastro', cadastroController.cadastro);

router.post('/servico', clienteController.cadastrarServico);

module.exports = router;

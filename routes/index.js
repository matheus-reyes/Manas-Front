var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inicioCliente', function(req, res, next) {
  res.render('inicioCliente', { title: 'Express' });
});

router.get('/servicos', function(req, res, next) {
  res.render('servicos', { title: 'Express' });
});

module.exports = router;

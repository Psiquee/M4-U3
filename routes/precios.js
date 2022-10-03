var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('precios') ; //view/precios.hbs
  //res.send('Hola aca tenes la lista de precios', { title: 'Express' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express' });
});

router.get('/custom/:tit', function(req, res, next) {
  res.render('index', { title: req.params.tit });
});

module.exports = router;

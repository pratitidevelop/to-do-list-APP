var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('enterTask', { title: 'TO-DO-LIST' });
});

module.exports = router;

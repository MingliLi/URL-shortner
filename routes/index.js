var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'MEAN Stack urlShortener' });
});

module.exports = router;

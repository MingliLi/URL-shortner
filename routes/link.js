var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Linker = require('../models/Linker.js');

/* GET /linker listing. */
router.get('/', function(req, res, next) {
  Linker.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* POST /link */
router.post('/', function(req, res, next) {
  Linker.create(req.body, function (err, data) {
    if (err) return next(err);
    res.json(data.itemId.toString(16));
  });
});

/* GET /link/hexaId */
router.get('/:hexaId', function(req, res, next) {
  // Linker.findById(req.params.hexaId, function (err, post) {
  Linker.findOne({ 'itemId': parseInt(req.params.hexaId, 16) }, function (err, data) {
    if (err) return next(err);
    console.log(data.url);
    res.redirect('http://' + data.url);
  });
});

/* PUT /link/:hexaId */
router.put('/:hexaId', function(req, res, next) {
  var query = { itemId: parseInt(req.params.hexaId, 16) };
  Linker.update(query, { url: req.body.url }, function(err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* DELETE /link/:hexaId */
router.delete('/:hexaId', function(req, res, next) {
  var query = { itemId: parseInt(req.params.hexaId, 16) };
  Linker.remove(query, function(err, data) {
    if (err) return next(err);
    res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router;

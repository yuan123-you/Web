var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/accounts', function(req, res, next) {
  res.send("记账页面");
});

module.exports = router;

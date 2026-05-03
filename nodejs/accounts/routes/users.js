var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/accounts/create', function(req, res, next) {
  res.send('创建页面');
});

module.exports = router;

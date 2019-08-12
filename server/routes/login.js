var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
    res.json({name:'admin',pwd:'123'});
});

module.exports = router;
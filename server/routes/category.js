var express = require('express');
var router = express.Router();
var Category = require('../models/Category')

router.post('/getAllCategory',function(req, res, next) {
    Category.find({}, function(err, category) {
        if(err) throw err;
        res.json({category});
    })
});

module.exports = router;
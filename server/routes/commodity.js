var express = require('express');
var router = express.Router();
var Category = require('../models/Commodity')

router.post('/getCommodity',function(req, res, next) {
    Category.find({categoryId: req.body.categoryId}, function(err, commodityList) {
        if(err) throw err;
        res.json({commodityList});
    })
});

module.exports = router;
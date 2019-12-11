var express = require('express');
var router = express.Router();
var Commodity = require('../models/Commodity')

router.post('/getCommodity',function(req, res, next) {
    Commodity.find({categoryId: req.body.categoryId}, function(err, commodityList) {
        if(err) throw err;
        res.json({commodityList});
    })
});

router.post('/insertCommodity',function(req, res, next) {
    Commodity.findOne({commodityId: req.body.commodityId}, function(err, data) {
        if(data) {
            // 如果商品已存在
            res.json({success: false, message: '商品已存在'})
        }else{
            // 如果商品不存在
            var postData = {
                categoryId: req.body.categoryId,
                commodityId: req.body.commodityId,
                commodityName: req.body.commodityName,
                commodityInfo: req.body.commodityInfo,
                commodityImg: req.body.commodityImg,
                commodityPrice: req.body.commodityPrice
            }
            Commodity.create(postData, function(err, data) {
                if(err) throw err;
                res.json({success: true});
            })
        }
    })
});

module.exports = router;
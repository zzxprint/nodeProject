var express = require('express');
var router = express.Router();
var Commodity = require('../models/Commodity')

// 根据ID获取商品列表
router.post('/getCommodity',function(req, res, next) {
    Commodity.find({categoryId: req.body.categoryId}, function(err, commodityList) {
        if(err) throw err;
        res.json({commodityList});
    })
});

// 获取首页打折商品
router.post('/getDiscountCommodity', function(req, res, next) {
    Commodity.find({discountPrice: {'$exists': true}, discountPrice: {$gt: 0}}, function(err, commodityList) {
        if(err) throw err;
        res.json({commodityList});
    })
});

// 随机获取N个商品
router.post('/getRandomCommodity',function(req, res, next) {
    Commodity.aggregate([{ $sample: { size: req.body.size}}], function(err, commodityList) {
        if(err) throw err;
        res.json({commodityList});
    })
});

// 插入商品信息
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
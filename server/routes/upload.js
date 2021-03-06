var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');

router.post('/uploadImg',function(req, res, next) {
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.keepExtensions = true; //保留扩展名
    form.uploadDir = path.join(__dirname, '../public/images/commodity'); //文件存储路径
    form.parse(req, function(err, fields, files) {
        if(err) {
            return;
        }
        var imgPath = files.file.path;
        res.json({path: imgPath});
    })
});

router.post('/deleteImg',function(req, res, next) {
    var fileName = path.join(__dirname, '../public/images/commodity/' + req.body.commodityImg);
    fs.unlink(fileName, function(err){
        if(err) {
            res.json({success: false});
            return;
        };
        res.json({success: true});
    })
});

module.exports = router;
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
const secretKey = 'zzxprint'

router.post('/login',function(req, res, next) {
    if(req.body.username == 'zzxprint' && req.body.password == '123456'){
        var payload = {
            username: req.body.username
        };
        var token = jwt.sign(payload, secretKey, {
            expiresIn : 60 * 60 * 24 // 授权时效24小时
        });
        res.json({
            success: true,
            token: token
        })
    }else{
        res.json({success: false});
    }
});

module.exports = router;
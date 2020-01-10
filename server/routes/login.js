var express = require('express');
var router = express.Router();
var User = require('../models/User')
var jwt = require('jsonwebtoken')
const secretKey = 'zzxprint'

router.post('/login',function(req, res, next) {
    // 判断登录信息
    User.findOne({username: req.body.username}, function(err, userInfo) {
        if(err) throw err;
        // 如果用户存在
        if(userInfo){
            // 密码错误
            if(userInfo.password != req.body.password){
                res.json({success: false, msg: '密码错误'})
            }else{
                // 密码正确，删除敏感信息
                delete userInfo.password
                res.json({success: true, userInfo: userInfo})
            }
        }else{
            res.json({success: false, msg: '用户名不存在'})
        }
    })
    // if(req.body.username == 'zzxprint' && req.body.password == '123456'){
    //     var payload = {
    //         username: req.body.username
    //     };
    //     var token = jwt.sign(payload, secretKey, {
    //         expiresIn : 60 * 60 * 24 // 授权时效24小时
    //     });
    //     res.json({
    //         success: true,
    //         token: token
    //     })
    // }else{
    //     res.json({success: false});
    // }
});

module.exports = router;
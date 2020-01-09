const expressJwt = require('express-jwt')

// 需要排除不验证的url
const unlessArr = [
    '/api/login/login',
    '/api/category/getAllCategory',
    '/api/commodity/getCommodity',
    '/api/commodity/getDiscountCommodity',
    '/api/commodity/getRandomCommodity',
];

const jwtAuth = expressJwt({secret: 'zzxprint'}).unless({
    path: unlessArr
});

module.exports = jwtAuth;
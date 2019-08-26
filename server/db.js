var mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost/shopStore',{ useNewUrlParser: true});

var db = mongoose.connection;
db.on('open', function(){
  console.log('数据库连接成功');
});
db.on('error', function(){
  console.log('数据库连接失败');
});

module.exports = mongoose;
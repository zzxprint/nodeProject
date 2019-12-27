const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    mongoose.connect(config.url, { useNewUrlParser: true });//连接数据库
    //实例化连接对象
    var db = mongoose.connection;
    db.on('error', console.error.bind(console,"connect error"));
    db.once('open', (callback) => { console.log("connected!")})
    return db;
}
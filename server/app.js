var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); //跨域配置
// 数据库连接
var mongoose = require('./config/mongoose.js');
var db = mongoose();
var bodyParser = require('body-parser'); //解析post请求参数

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var categoryRouter = require('./routes/category');
var commodityRouter = require('./routes/commodity');

var app = express();

// cors跨域配置
app.use(cors({
  origin:['http://localhost:8088'], //允许这个域的访问
  methods:['GET','POST'], //只允许GET和POST请求
  allowedHeaders:['Content-Type','Authorization'] //直允许带这两种请求头的连接访问
}))

// 解析post参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/category', categoryRouter);
app.use('/commodity', commodityRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

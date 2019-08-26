var mongoose = require('mongoose');
var CategorySchema = require('../schemas/CategorySchema');

//创建model，这个地方的product对应mongodb数据库中products的conllection。
//mongoose会自动改成复数，如模型名：xx―>xxes, kitten―>kittens, money还是money
var Category = mongoose.model('', CategorySchema);

module.exports = Category;
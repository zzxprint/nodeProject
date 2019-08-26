var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    categoryId: String,
    categoryName: String
});

// 指定集合的名字，这样mongoose不会自动把它变为复数
// var CategorySchema = new Schema({
//     categoryId: String,
//     categoryName: String
// },
// {
//     collection: 'category'
// });

module.exports = CategorySchema;
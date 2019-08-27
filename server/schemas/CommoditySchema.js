var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    categoryId: String,
    commodityId: String,
    commodityName: String,
    commodityInfo: String,
    commodityImg: String,
    commofityPrice: String
});

module.exports = CategorySchema;
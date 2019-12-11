var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommoditySchema = new Schema({
    categoryId: String,
    commodityId: String,
    commodityName: String,
    commodityInfo: String,
    commodityImg: String,
    commodityPrice: String
});

module.exports = CommoditySchema;
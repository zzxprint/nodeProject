var mongoose = require('mongoose');
var CommoditySchema = require('../schemas/CommoditySchema');

var Commodity = mongoose.model('commodity', CommoditySchema);

module.exports = Commodity;
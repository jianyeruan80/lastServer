var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var citysSchema = new Schema({
  name:String,
  abbreviation:String,
  descript:String,
  state:{type: mongoose.Schema.Types.ObjectId, ref: 'states'},
  towns:[{type: mongoose.Schema.Types.ObjectId, ref: 'towns'}],

})

citysSchema.index({ name: 1}, { unique: true,sparse:true});
module.exports = mongoose.model('citys', citysSchema);
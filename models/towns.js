var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var townsSchema = new Schema({
  name:String,
  abbreviation:String,
  descript:String,
  city:{type: mongoose.Schema.Types.ObjectId, ref: 'citys'},
  villages:[{type: mongoose.Schema.Types.ObjectId, ref: 'villages'}],
})

townsSchema.index({ name: 1}, { unique: true,sparse:true});
module.exports = mongoose.model('towns', townsSchema);
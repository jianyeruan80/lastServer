var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statesSchema = new Schema({
  name:String,
  abbreviation:String,
  descript:String,
  country:{type: mongoose.Schema.Types.ObjectId, ref: 'countrys'},
  states:[{type: mongoose.Schema.Types.ObjectId, ref: 'citys'}],
})

statesSchema.index({ name: 1}, { unique: true,sparse:true});
module.exports = mongoose.model('states', statesSchema);
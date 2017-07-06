var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var villagesSchema = new Schema({
  name:String,
  abbreviation:String,
  descript:String,
  town:{type: mongoose.Schema.Types.ObjectId, ref: 'towns'}
  
})

villagesSchema.index({ name: 1}, { unique: true,sparse:true});
module.exports = mongoose.model('villages', villagesSchema);
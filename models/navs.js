var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var navsSchema = new Schema({
  name:String,
  parent:String,
  
  
})

navsSchema.index({ name: 1}, { unique: true,sparse:true});
module.exports = mongoose.model('navs', navsSchema);
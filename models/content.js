var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contentsSchema = new Schema({
  
  type:String,
  country:String,
  state:String,
  picture:String,
  fee:String,
  description:String,
  contactName:String,
  contactPhone:String,
  email:String,
  destination:String,
  destinationAddress:String,
  arrivalTime:Date,
  createdAt: {type:Date,default:Date.now},
  updatedAt: Date,
  departureSite:String,
  departureAddress:String,
  departureTime:Date,
  tripSite:[String]

})

contentsSchema.index({ name: 1}, { unique: true,sparse:true});
module.exports = mongoose.model('contents', contentsSchema);



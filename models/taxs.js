var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var lauguagesSchema = new Schema({
   "second":String,
	"third":String
})
var taxsSchema = new Schema({
	   merchantId:{type:String,lowercase: true, trim: true},
      name:{type:String,uppercase: true},
      taxRate:Number,
      description:String,
      language:{
       description:lauguagesSchema
       }

});
taxsSchema.index({ merchantId: 1,name:1},{unique: true,sparse:true });
module.exports = mongoose.model('taxs', taxsSchema);


var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    tools = require('../modules/tools');
var addressSchema = new Schema({
      address: String,
      city: String,
      state: String,
      zipcode: String,
      description:String,
      language:{
         description:lauguagesSchema
    },
   location: {
    type:{type:String,default:'Point'},
    coordinates: [Number],
    
  }
  
});
var lauguagesSchema = new Schema({
	"second":String,
	"third":String
})


var suppliersSchema = new mongoose.Schema({
    merchantId:{type:String,lowercase: true, trim: true},
    name:String,
    addressInfo:addressSchema,
    phoneNum1:String,
    phoneNum2:String,
    webSite:String,
    email:String,
    about :String,
    createdAt: {type:Date,default:tools.defaultDate},
    updatedAt: Date,
    picture:String,
    language:{
         name:lauguagesSchema,
         description:lauguagesSchema
    },
    operator:{
  id:{type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  user:String,

}
});
suppliersSchema.index({merchantId: 1 }, { unique: true,sparse:true});
module.exports = mongoose.model('suppliers', suppliersSchema);


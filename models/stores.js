var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    tools = require('../modules/tools');
var lauguagesSchema = new Schema({
  "second":String,
  "third":String
})
var addressSchema = new Schema({
      address1: String,
      address2: String,
      city: String,
      state: String,
      zipcode: String,
      description:String,
      language:{
         description:lauguagesSchema
    }
    //location: {
    //type:{type:String,default:'Point'},
    //coordinates: [Number],
    
  //}
  
});
var distanceFeeSchema = new mongoose.Schema({ 
  distance:String,
  fee:Number
})

var storesSchema = new mongoose.Schema({ 
    merchantId:{type:String,lowercase: true, trim: true},
    name:String,
    contact:String,
    addressInfo:addressSchema,
    phoneNum1:String,
    phoneNum2:String,
    webSite:String,
    email:String,
    password:String,
    tax:Number,
    about :String,
    createdAt: {type:Date,default:Date.now},
    updatedAt: Date,
    logo:String,
    fax:String,
    licenseKey:String,
    active:{type:Boolean,default:false},
    sessionKey:[{type:String}],
    openTime:String,
    orderTime:String,
    qrcUrl:{type:String,lowercase:true},
    minPrice:Number,
    waitTime:String,
    deliveryFee:String,
    maxDistance:Number,
    DiffTimes:{type:Number,default:0},
    distanceFee:[distanceFeeSchema],
    expires:Date,
    reportStartTime:Date,
    reportEndTime:Date,
    status:{type:String,default:"true"},
    language:{
         name:lauguagesSchema,
         description:lauguagesSchema
    },
    zoneInfo:{type:Number,default:0},
    chains:String,
    operator:{
  id:{type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  user:String,

},
});
storesSchema.index({merchantId:1},{unique: true,sparse:true });
module.exports = mongoose.model('stores', storesSchema);


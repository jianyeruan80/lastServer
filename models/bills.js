var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    tools = require('../modules/tools');

var billsSchema = new Schema({
merchantId:{type:String,lowercase: true, trim: true},
orderNo:String,
subTotal: {type:Number,defualt:0},
taxRate:{type:Number,defualt:0},
tax:{type:Number,defualt:0},
tipRate:{type:Number,defualt:0},
creditTip:{type:Number,defualt:0},
cashTip:{type:Number,defualt:0},
discountRate:{type:Number,defualt:0},
discount:{type:Number,defualt:0},
charge:{type:Number,defualt:0},
chargeRate:{type:Number,defualt:0},
grandTotal:{type:Number,defualt:0},
type:{type:String,default:"Cash"},
receiveTotal:{type:Number,defualt:0},
change:{type:Number,defualt:0},
createdAt: {type:Date,default:Date.now()},
updatedAt: Date,
status:{type:String,default:"Paid"}, //paid,void
infos:{
	authCode:String,
	refNum:String,
	avs:String,
	cvv:String,
	invoiceNum:String,
	orderId:String,
        cardNumber:String,
        cardHolder:String
},
operator:{
	id:{type: mongoose.Schema.Types.ObjectId, ref: 'users' },
	user:String
},
customer:{
	id:{type: mongoose.Schema.Types.ObjectId, ref: 'customers' },
	user:String
},
order:{type: mongoose.Schema.Types.ObjectId, ref: 'orders'},
bill:{type: mongoose.Schema.Types.ObjectId, ref: 'bills',null:true},
});

module.exports = mongoose.model('bills', billsSchema);

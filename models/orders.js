var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    tools = require('../modules/tools');
var orderDetailsSchema = new Schema({
merchantId:{type:String,lowercase: true, trim: true},
category:String,
price:Number,
qty:Number,
name:String,
charge:Number,
chargeRate:Number,
currentPrice:Number,//-
discount:Number,//-
discountRate:Number,
unit:{type: String, enum: ['Case', 'LB', 'Bottle','Piece','Gram', 'Liter'],default:'Case'},
options:[{"name":String,price:Number,order:Number}],
properties:[],
item:{type: mongoose.Schema.Types.ObjectId, ref: 'items' }
});

var ordersSchema = new Schema({
orderNo:String,
invoiceNo:{type:String, index: true, required: true},
notes:String,
pickUpTime:{type:Date,index:true},
timer:Date,
merchantId:{type:String,lowercase: true, trim: true},
subTotal:Number,
charge:Number,
chargeRate:Number,
taxRate:Number,
tax:Number,
orderType:{type:String,default:"Laundry"},
tip:Number,
tipTotal:Number,
orderDetails:[orderDetailsSchema],
discountRate:Number,//-
discount:Number,//-
refund:Number,
grandTotal:{type:Number,default:0},
paid:{type:Number,default:0},
unpaid:Number,
reason:String,
status:{type:String,default:"Unpaid",index:true},//uppaid,paid,close
createdAt: Date,
updatedAt: Date,
createdBy:{
	id:{type: mongoose.Schema.Types.ObjectId, ref: 'users' },
	user:String
},
operator:{
	id:{type: mongoose.Schema.Types.ObjectId, ref: 'users' },
	user:String
},
customer:{
	id:{type: mongoose.Schema.Types.ObjectId, ref: 'customers' },
	user:String
}
});

module.exports = mongoose.model('orders', ordersSchema);

/*  yearMonthDay: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          time: { $dateToString: { format: "%H:%M:%S:%L", date: "$date" } }
{ "_id" : 1, "yearMonthDay" : "2014-01-01", "time" : "08:15:39:736" }
          */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var lauguagesSchema = new Schema({
	"second":String,
	"third":String
})


var inventoryItemsSchema = new mongoose.Schema({ 
    merchantId:{type:String,lowercase: true, trim: true},
    name:{type:String},
    category:{ type: mongoose.Schema.Types.ObjectId, ref: 'categorys',null: true },
    price:Number,
    picture:{type:String},
    description:String,
    order:{type:Number,default:1},
    alarm:Number, 
    baseQty:Number,
    baseUnit:{type: String, enum: ['Case', 'LB', 'Bottle','Piece','Gram', 'Liter'],default:'Case'},
    derivedUnit:{type: String, enum: ['Case', 'LB', 'Bottle','Piece','Gram', 'Liter'],default:'Case'},
    derivedQty:Number,
    createdAt: {type:Date,default:Date.now},
    updatedAt: Date,
    operator:{
             id:{type: mongoose.Schema.Types.ObjectId, ref: 'users' },
             user:String
    },
    language:{
         name:lauguagesSchema,
         description:lauguagesSchema
    }
});
inventoryItemsSchema.index({ name: 1, merchantId: 1 }, { unique: true,sparse:true});
module.exports = mongoose.model('inventoryItems', inventoryItemsSchema);

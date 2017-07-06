var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var lauguagesSchema = new Schema({
	"second":String,
	"third":String
})


var transactionsSchema = new mongoose.Schema({
    merchantId: String,
    inventoryItem:{ type: mongoose.Schema.Types.ObjectId, ref: 'inventoryItems',null: true },
    qty:Number,
    type:{type: String, enum: ['Outstock', 'Instock'],default:'Outstock'}},
    item:{ type: mongoose.Schema.Types.ObjectId, ref: 'items',null: true },
    createdAt: Date,
    updatedAt: Date,
    description:String,
    language:{
         name:lauguagesSchema,
         description:lauguagesSchema
    }
});
transactionsSchema.index({merchantId: 1 }, { unique: true,sparse:true});
module.exports = mongoose.model('transactions', transactionsSchema);


var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    tools = require('../modules/tools');
var lauguagesSchema = new Schema({
	"second":String,
	"third":String
})
var optionsSchema = new mongoose.Schema({ 
    name:String,
    description:String,
    price:Number,
    picture:String,
    order:{type:Number,default:1},
    compositions:[{inventoryItem:{type: mongoose.Schema.Types.ObjectId, ref: 'inventoryItems'},qty:Number}],
    unit:{type: String, enum: ['Case', 'LB', 'Bottle','Piece','Gram', 'Liter'],default:'Case'},
    language:{
         name:lauguagesSchema,
         description:lauguagesSchema
    }
   
});

var optionsGroupsSchema = new mongoose.Schema({ 
    merchantId:{type:String,lowercase: true, trim: true},
    group:{type: "String",default:"Default"},
    description:String,
    minimun:{type:Number,default:0},
    maximun:{type:Number,default:0},
    order:{type:Number,default:1},
    options:[optionsSchema],

    language:{
         group:lauguagesSchema,
         name:lauguagesSchema,
         description:lauguagesSchema
    }
   
});
var sizesSchema = new mongoose.Schema({ 
      name:String,
      price:Number,
       language:{
         name:lauguagesSchema
        
    }
})
var itemsSchema = new mongoose.Schema({ 
    merchantId:{type:String,lowercase: true, trim: true},
    name:{type:String},
    globalOptions:[{type: mongoose.Schema.Types.ObjectId,ref: 'globalOptionGroups'}],
    customerOptions:[optionsGroupsSchema],
    size:[sizesSchema],
    category:{ type: mongoose.Schema.Types.ObjectId, ref: 'categories'},
    price:Number,
    picture:{type:String},
    status:{type:String,default:"true"},
    description:String,
    order:{type:Number,default:1},
    oldPrice:Number,
    unit:{type: String, enum: ['Case', 'LB', 'Bottle','Piece','Gram', 'Liter'],default:'Case'},
    compositions:[{inventoryItem:{type: mongoose.Schema.Types.ObjectId, ref: 'inventoryItems'},qty:Number}],
    properties:Schema.Types.Mixed,
    operator:{
    id:{type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    user:String
},
    language:{
         name:lauguagesSchema,
         description:lauguagesSchema
    }
});
itemsSchema.index({ name: 1, merchantId: 1,category:1 ,status:1}, { unique: true,sparse:true});
module.exports = mongoose.model('items', itemsSchema);
/*{ createdAt: { type: Date, expires: 3600, default: Date.now }}
OrderList.$.UserName","大叔2015-09-21
*/

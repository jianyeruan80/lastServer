var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var lauguagesSchema = new Schema({
    "second":String,
    "third":String
})
var globalOptionsSchema = new mongoose.Schema({ 
    name:String,
    description:String,
    price:Number,
    order:{type:Number,default:1},
    picture:String,
    language:{
         name:lauguagesSchema,
         description:lauguagesSchema
    }
   
});


var globalOptionGroupsSchema = new mongoose.Schema({ 
    merchantId:{type:String,lowercase: true, trim: true},
    group:{type: "String",default:"Default"},
    description:String,
    minimun:{type:Number,default:0},
    maximun:{type:Number,default:0},
    order:{type:Number,default:1},
    picture:String,
    unit:{type: String, enum: ['Case', 'LB', 'Bottle','Piece','Gram', 'Liter'],default:'Case'},
    compositions:[{inventoryItem:{type: mongoose.Schema.Types.ObjectId, ref: 'inventoryItems'},qty:Number}],
    operator:{
     id:{type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    user:String
},
    options:[globalOptionsSchema],
    language:{
         group:lauguagesSchema,
        
         description:lauguagesSchema
    }
   
});
globalOptionGroupsSchema.index({merchantId: 1,group:1},{unique: true,sparse:true });
module.exports = mongoose.model('globalOptionGroups', globalOptionGroupsSchema);


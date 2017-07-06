var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var lauguagesSchema = new Schema({
	"second":String,
	"third":String
})

var groupsSchema = new mongoose.Schema({ 
    merchantId:{type:String,lowercase: true, trim: true},
    name:{type:String},
    description:String,
    status:{type:String,default:"true"},
    order:{type:Number,default:1},
    language:{
         name:lauguagesSchema,
         description:lauguagesSchema
    },
    picture:{type:String},
    categories:[{type: mongoose.Schema.Types.ObjectId, ref: 'categories'}],
    type:{type: String, enum: ['Product','inventoryItems'],default:'Product'},
    operator:{
    id:{type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    user:String
},
   
});
groupsSchema.index({ name: 1, merchantId: 1,status:1 }, { unique: true,sparse:true});
module.exports = mongoose.model('groups', groupsSchema);
/*{ createdAt: { type: Date, expires: 3600, default: Date.now }}
OrderList.$.UserName","大叔2015-09-21
*/

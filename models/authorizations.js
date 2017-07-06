var mongoose = require('mongoose'),Schema = mongoose.Schema;
var authorizationsSchema = new Schema({
      merchantId:{type:String,lowercase: true, trim: true},
      userId:{type: mongoose.Schema.Types.ObjectId, ref: 'users'},
      userName:String,
      perm:String,  
      note:String,
      createdAt:{type:Date,default:Date.now}
    });
authorizationsSchema.index({ merchantId: 1,name:1});
module.exports = mongoose.model('authorizations',authorizationsSchema);
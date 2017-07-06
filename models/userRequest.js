var mongoose = require('mongoose');

var UserRequestSchema = new mongoose.Schema({
      email: {type:String,lowercase:true},
      token: String,
      type: { type: String },//Active,ResetPwd
      createdAt:{type:Date,default:Date.now}
});

module.exports = mongoose.model('UserRequest', UserRequestSchema);

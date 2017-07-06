var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var attendancesSchema = new Schema({
merchantId:{type:String,lowercase: true, trim: true},	
date:Date,
timeIn:Date,
timeOut:Date,
description:String,
user:{ type: mongoose.Schema.Types.ObjectId, ref: 'users' },
});

module.exports = mongoose.model('attendances', attendancesSchema);



var express = require('express'),
    router = express.Router(),
    log = require('../modules/logs'),
    stores = require('../models/stores'),
    
    
    storehours= require('../models/storehours'),
    customers = require('../models/customers'),
    menuItem = require('../models/menuitem'),
    
    security = require('../modules/security'),
    md5 = require('md5'),
    config = require('../modules/config'),
    jwt = require('jsonwebtoken'),
    set = require('../models/settings');
    settings=set.settings;
    settingRecords=set.settingRecords;
     returnData={};
    returnData.success=true;
/**
 * @api {get} /api/background/storehours
 * @apiVersion 0.0.1
 * @apiName storeList
 * @apiGroup background
 * 
 * @apiParam {object} storehoursJson
 * 
 * @apiSuccess {object} success:true,message:{}
 */




router.get('/settingrecords', security.ensureAuthorized,function(req, res, next) {

var query={};
query.merchantId=req.token.merchantId;
 settingRecords                
.find(query)
.populate([{path:'setting',select:'group name'}])
.exec(function (err, data) {
  if (err) return next(err);

  console.log(data);
   var bigJson={}; 
    for(var i=0;i<data.length;i++){
                bigJson[data[i].setting._id]=data[i];  
              }
   returnData.message=bigJson;
   res.json(returnData);
  // prints "The creator is Aaron"
});


});

router.get('/settings', security.ensureAuthorized,function(req, res, next) {
settings.aggregate(
        [

         { $sort: {"order" :1}},
         {$group:{_id:"$group", order: { $min: "$order" },settings:{$push:"$$ROOT"}}}
        ]
        ).sort({"order" : 1}).exec(function(err,d){
          if (err) return next(err);
           var bigJson={}; 
            settingRecords.find({},function(err,data){
              for(var i=0;i<data.length;i++){
                bigJson[data[i].setting]=data[i].value;  
              }
               for(var j=0;j<d.length;j++){
                   for(var k=0;k<d[j].settings.length;k++){
                      d[j].settings[k].value=bigJson[d[j].settings[k]._id]
                   }
              }
            returnData.message=d;
            res.json(returnData);
            })
            
           
        })

});
router.post('/setting', security.ensureAuthorized,function(req, res, next) {

  var info=req.body;
  var infoTemp={};
   for(var i=0;i<info.length;i++){
        for(var j=0;j<info[i].settings.length;j++){
           var json=info[i].settings[j];
           infoTemp={};
           infoTemp.setting=json._id;
           infoTemp.value=json.value;
           infoTemp.merchantId=req.token.merchantId;
           settingRecords.update( { "setting":json._id },
           infoTemp, { upsert: true },function(err,data){
           if (err) return next(err);
        })
           
        } 
        
   }
    returnData.message="OK";
    res.json(returnData);
/*settingRecords.aggregate(
        [{ $sort: {"order" :1}},
         {$group:{_id:"$group", order: { $min: "$order" },settings:{$push:"$$ROOT"}}}
        ]
        ).sort({"order" : 1}).exec(function(err,data){
            if (err) return next(err);
            console.log(data);
            returnData.message=data;
            res.json(returnData);
        })*/

});




module.exports = router;

/*
var PersonSchema = new Schema({
      name:{
        first:String,
        last:String
      }
    });
  PersonSchema.virtual('name.full').get(function(){
      return this.name.first + ' ' + this.name.last;
    });

Post.find({}).sort('test').exec(function(err, docs) { ... });
Post.find({}).sort({test: 1}).exec(function(err, docs) { ... });
Post.find({}, null, {sort: {date: 1}}, function(err, docs) { ... });
Post.find({}, null, {sort: [['date', -1]]}, function(err, docs) { ... });

db.inventory.aggregate( [ { $unwind: "$sizes" } ] )
db.inventory.aggregate( [ { $unwind: { path: "$sizes", includeArrayIndex: "arrayIndex" } } ] )
https://docs.mongodb.com/manual/reference/operator/aggregation/group/
[
   /*{ $project : { title : 1 , author : 1 } } addToSet*/
/*    { $match: { status: "A" } },*
 { $group : {_id : "$permission_group", perms:{$push:{"subject":"$subject","action":"$action","perm":"$perm","status":"$status","value":"$_id","key":"$perm"} } } }
  // _id : { month: "$permission_group", day: { $dayOfMonth: "$date" }, year: { $year: "$date" } }

  /*    {
        $group : {
          _id:{permissionGroup:"$permission_group",subjects:{$push:"$subject"}}
         
    sort({"order" : 1})
        }
      }*/
/*users.update({"_id":key},{"$addToSet":{"permissions":{"$each":info.value}}},function(err,data){*/



var express = require('express'),
    router = express.Router(),
    log = require('../modules/logs'),
     tools = require('../modules/tools'),
     moment=require('moment'),
    security = require('../modules/security'),
    settings = require('../models/settings');
	var mongoose = require('mongoose');
const settingsViewSchema = new Schema( {}, { strict: false });
const settingsViewDao = mongoose.model('settingsView', settingsViewSchema,'settingsView'); 
router.get('/', function(req, res, next) {
     log.debug(req.token);
	 settings.aggregate([
    {
       $match:{"item":{$ne:""}} 
    }, 
       {"$unwind":"$values"},
       {
           "$unwind":"$values.value"
       } , 
       {
           $match:{"values.value.value":{$ne:false}}
       },
       {
           $group:{
               "_id":{
                   "group":"$group","category":"$category","item":"$item"
                    
               },"values":{$push:
               
                {$cond: { if: { $eq: [ "$values.type", "input" ] }, then: {
                      
                      
                       "name":"$values.name","value":"$values.value"
                   }, else: {
                      
                      "name":"$values.value.name","value":"$values.value.value"
                   } }}
               
              
           }}
       },
       {
           $project: {"group":"$_id.group","category":"$_id.category","item":"$_id.item","values":1,"_id":0}
       },{
           "$unwind":"$values"
       },{
           $project: {"group":1,"category":1,"item":1,
           "name":{"key":"$values.name","value":"$values.value"}
               
           }
       },{
           $sort:{group:1,catetory:1,item:1}
       }
    ]).exec(function (err, data) {
        if (err) return next(err);
          res.json(data);
      });
     
});
router.get('/category', function(req, res, next) {
     log.debug(req.token);
     var query={"merchantId":"laundry","category":"Cash Drawers"};
       settings.find(query, function (err, data) {
        if (err) return next(err);
          res.json(data);
      });
     
});
router.get('/merchant/id',function(req, res, next) {

     

    /* var query={"merchantId":req.token.merchantId};*/
settingsViewDao.find({},function(err,data){
            if (err) return next(err);


            res.json(data);
        })

})



router.post('/',  function(req, res, next) {
   var info=req.body;
    info.merchantId="laundry"; 
   info.operator={};
   console.log(info);
/*info.operator.id=req.token.id;
info.operator.user=req.token.user;*/
 
   var dao = new settings(info);
   dao.save(function (err, data) {
   if (err) return next(err);
          res.json(data);
      });
})
router.put('/:id',  function(req, res, next) {
var info=req.body;
  
var id=req.params.id;
info.updatedAt=moment().utc(moment().format()).format();
info.operator={};
/*info.operator.id=req.token.id;
info.operator.user=req.token.user;*/

var options = {new: true};
 settings.findByIdAndUpdate(id,info,options,function (err, data) {
          if (err) return next(err);
          res.json(data);
    });
})

router.delete('/:id',function(req, res, next) {
     settings.remove({"_id":req.params.id}, function (err, data) {
        if (err) return next(err);

          res.json(data);
      });
});

module.exports = router;


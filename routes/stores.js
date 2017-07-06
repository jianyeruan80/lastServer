
var express = require('express'),
    router = express.Router(),
    log = require('../modules/logs'),
    security = require('../modules/security'),
    stores = require('../models/stores'),
     tools = require('../modules/tools'),
       rest = require('restler'),
       moment=require('moment'),
     licenses = require('../modules/licenses');
router.get('/', function(req, res, next) {
     log.debug(req.token);
       stores.findOne({}).sort({"_id":-1}).exec(function (err, data) {
        if (err) return next(err);
          res.json(data);
      });
     
});

router.post('/decrypt',  function(req, res, next) {
  var info=req.body;

  var key=licenses.decryptLicense(info.licenseKey);  
  try{
          var keyJSON=JSON.parse(key);
           console.log(keyJSON);
        console.log(keyJSON.merchantId);
        if(keyJSON.merchantId==info.merchantId && keyJSON.active==true){
            var currentDate=moment().utc(moment().format()).format();
            var expires=new Date(keyJSON.expires);
         
               keyJSON.expiresTotal=Math.ceil(new Date(currentDate-expires).getTime()/(24*60*60*1000));
   if(currentDate>expires){
               keyJSON.active=false;
               
             //  keyJSON.expiresTotal=Math.ceil(new Date(currentDate-expires).getTime()/(24*60*60*1000));
               res.json(keyJSON);
            }else{
             // keyJSON.expiresTotal=0;
              res.json(keyJSON);
            }
        }else{
             return next({"code":"90007"});
  }
  }catch(ex){
        return next({"code":"90007"});
  }
 

})
router.post('/active',  function(req, res, next) {
   var info=req.body;
   var query={
     "merchantId":info.merchantId
   }
   var update={};
    update.merchantId=info.merchantId;
    update.licenseKey=info.licenseKey;
    update.expires=new Date(info.expires);
    var options={
         "upsert": true,
         "new":true
    }
     stores.findOneAndUpdate(query,info,options,function (err, data) {
          if (err) return next(err);
          res.json(data);
    }
    );
})

router.get('/merchants/id', security.ensureAuthorized,function(req, res, next) {
   
     var query={"merchantId":req.token.merchantId};
     

       stores.findOne(query, function (err, data) {
        if (err) return next(err);
        console.log(data);
         res.json(data);
      });
     
});
router.get('/:id', security.ensureAuthorized,function(req, res, next) {
     log.debug(req.token);
       stores.findById(req.params.id, function (err, data) {
        if (err) return next(err);
         res.json(data);
      });
     
});

router.post('/',  security.ensureAuthorized,function(req, res, next) {
   var info=req.body;
   info.merchantId=req.token.merchantId; 
   info.operator={};
   info.operator.id=req.token.id;
   info.operator.user=req.token.user;
   info.addressInfo.loc={
      "type":"Point","coordinates":[40.751351,-73.8597127]
  }
  var arvind = new stores(info);
   arvind.save(function (err, data) {
   if (err) return next(err);
          res.json(data);
      });
})
router.put('/:id',  security.ensureAuthorized,function(req, res, next) {
var info=req.body;

console.log("================");
console.log(info);
 console.log("================");

var id=req.params.id;

info.updatedAt=moment().utc(moment().format()).format();

info.operator={};
info.operator.id=req.token.id;
info.operator.user=req.token.user;

var options = {new: true};
stores.findByIdAndUpdate(req.params.id,info,options,function (err, data) {
          if (err) return next(err);
          res.json(data);
    });
})
router.delete('/',function(req, res, next) {
     stores.remove({}, function (err, data) {
        if (err) return next(err);
          res.json(data);
      });
});
router.delete('/:id', security.ensureAuthorized,function(req, res, next) {
     stores.remove({"_id":req.params.id}, function (err, data) {
        if (err) return next(err);
          res.json(data);
      });
});
router.post('/checkedSessionKey',  function(req, res, next) {
        var info=req.body;
        var isSession=false;
      
         if(!!info.sessionKey){
                stores.findOne({}, function (err, data) {
               if (err) return next(err);
                if(!data)return next({code:"99998"});
               var newInfo=JSON.parse(licenses.decryptLicense(data.licenseKey));
               for(var i=0;i<data.sessionKey.length;i++){
                  if(info.sessionKey==data.sessionKey[i]){
                    isSession=true;
                    break;
                  }
                
               }
               
               if(!isSession && newInfo.count>data.sessionKey.length){
                  
                      stores.findByIdAndUpdate(data._id,{$push:{sessionKey:info.sessionKey}} ,{new:true},function (err, data) {
                                if (err) return next(err);
                                 console.log("ok");
                           }) 
               }else if(!isSession){
                return next({"code":99995});
               }
               var currentDate=moment().utc(moment().format()).format();
               newInfo.day=Math.ceil((1621306555073-currentDate)/(1000*60*60*24));
               res.json(newInfo);
          })
         }else{
          return next({"code":99995});
         }
       
})
router.post('/checkedKey',  function(req, res, next) {
   var info=req.body;
   console.log(info);
   stores.findOne({"active":true,"licenseKey":{$ne:null}}, function (err, data) {
        if (err) return next(err);
        if(!!data){

                if(!!info.licenseKey && !!info.pcKey){
                      var newInfo=licenses.decryptLicense(info.licenseKey);
                     
                   if(!(!!newInfo && info.pcKey != newInfo.pcKey)){
                         return next({code:"99996"});
                     }else {
						 var updateJson={};
						 if(!!data.activeKey){
							 updateJson={"licenseKey":data.activeKey,active:true}
						 }
                      stores.findOneAndUpdate({"merchantId":data.merchantId},updateJson,{new:true,upsert:true},function (err, data) {
                          if (err) return next(err);
                               res.json(data);
                         }) 
                            
                       
                            
                        
                     }
                }else{
                      if(!info.sessionKey){
                         
                           return next({code:"99997"});
                    }else{

                         var keyInfo=JSON.parse(licenses.decryptLicense(data.licenseKey));//{code:"99997"};
               
                         var sign=false;
                         //if(2 >data.sessionKey.length){
                           for(var i=0;i<data.sessionKey.length;i++){
                                if(info.sessionKey==data.sessionKey[i]){
                                  keyInfo=licenses.decryptLicense(data.licenseKey);  
                                  sign=true;
                                  break;
                                }
                            }
				
                            if(sign==true){
                              res.json(keyInfo);  
                            }else if(keyInfo.count>data.sessionKey.length){
                                 stores.findOneAndUpdate({"merchantId":data.merchantId},
                                  {$addToSet: {sessionKey:info.sessionKey }},{new:true,upsert:true},function (err, data) {
                          if (err) return next(err);
                               res.json(data);
                         }) 
                               

                            }else{
                              return next({code:"99995"});
                            }
                            
                              
                       //  }
                         
                         
                    }

                }
            
        }else{
              if(!!info.licenseKey && !! info.pcKey){
	        
                 var newInfo=licenses.decryptLicense(info.licenseKey);
                   
                 console.log(!(!!newInfo && !!(info.pcKey == newInfo.pcKey)));

                if((!!newInfo && !!(info.pcKey == newInfo.pcKey))){
	            console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbz");
                     return next({code:"99996"});
                 }else{
                    rest.post('http://service520.com:3100/api/licenses/active',{data:{"licenseKey":info.licenseKey}}).on('complete', function (data, response) {
                   if (data instanceof Error) return next(data);
                         if(!!data.merchantId){
                            stores.findOneAndUpdate({"merchantId":data.merchantId},{"licenseKey":data.activeKey,"sessionKey":[],active:true},{new:true,upsert:true},function (err, data) {
                              if (err) return next(err);
                              return next({code:"99997"});
                         }) 
                         }else{
                          res.json(data);
                         }
                         
                   
                        
                    });  
                 }
           
              }else{
                return next({code:"99998"});
              }
        }

  })       
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



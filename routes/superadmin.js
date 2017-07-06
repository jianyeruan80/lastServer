

var express = require('express'),
    router = express.Router(),
    log = require('../modules/logs'),
    admins = require('../models/admins'),
    seqs = require('../models/seqs'),
    security = require('../modules/security'),
    stores = require('../models/stores'),
    tools = require('../modules/tools'),
    settings = require('../models/settings'),
    md5 = require('md5'),
    moment=require('moment'),
    jwt = require('jsonwebtoken');

var permissions=admins.permissions; 
var roles=admins.roles; 
var users=admins.users; 
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Server is Running' });
})
router.post('/login', function(req, res, next) {
  var info=req.body;
   var query={"userName":info.userName};
   query.type="SUPER";
    query.password=security.encrypt(md5(info.password));
    console.log(query);
    users.findOne(query,function (err, data) {

    if (err) return next(err);
    if (!data) return next({"code":"90002"});
     var json={};
     json.accessToken = jwt.sign({"type":query.type},req.app.get("superSecret"), {
          expiresIn: '10000m',
          algorithm: 'HS256'
        });
       res.json(json);
  });
});
router.get('/users', security.ensureAuthorized,function(req, res, next) {
       var info=req.query;
       info["type"]="ADMIN";
      if(req.token.type=="SUPER"){
        users.aggregate([{
           $match:info
        },{
          $lookup:{
                from: "stores",
                localField: "merchantId",
                foreignField: "merchantId",
                as: "users_doc"
          }
        },
        {
          $unwind:"$users_doc"
        },
        {
          $sort:{"_id": -1}
        }
       ]).exec(function (err, data) {
        if (err) return next(err);
         res.json(data);
      });
     }
});
router.post('/users',  security.ensureAuthorized,function(req, res, next) {
var info=req.body;
    console.log(info)
if(req.token.type=="SUPER"){
    info.password=security.encrypt(md5(info.password));
  var dao = new users(info);
      dao.save(function (err, data) {
      if (err) return next(err);
           var storeJson=info.users_doc;
               storeJson.merchantId=info.merchantId;
          var store=new stores(storeJson);
               store.save(function (err, store) {
              if (err) return next(err);
                 res.json(data);
             })
              
    });
                        
  } 
})
router.put('/users/:id',  security.ensureAuthorized,function(req, res, next) {
var info=req.body;
if(req.token.type=="SUPER"){
info.updatedAt=moment().utc(moment().format()).format();
 if(info.password.length<15){
  info.password=security.encrypt(md5(info.password)); 
 }else{
  delete info.password;
 }
 users.findByIdAndUpdate(req.params.id,info,{new: true},function (err, data) {
        if (err) return next(err);
                var storeJson=info.users_doc;
               storeJson.merchantId=info.merchantId;
               stores.findOneAndUpdate({"merchantId":info.merchantId},storeJson,{new: true},function (err, data) {
                if (err) return next(err);
                      res.json(data);
                });
        });
                        
  } 
})
router.get('/seqs', security.ensureAuthorized,function(req, res, next) {
   var  info=req.body;
        seqs.find({},function (err, data) {
               if (err) return next(err);
                 res.json(data) ;
        })
});
router.post('/seqs', security.ensureAuthorized,function(req, res, next) {
   var  info=req.body;

        info.updatedAt=moment().utc(moment().format()).format(); 
         var dao = new seqs(info);
         dao.save(function (err, data) {
         if (err) return next(err);
                res.json(data);
        });


 });
router.put('/seqs/:id', security.ensureAuthorized,function(req, res, next) {
   var  info=req.body;
        info.updatedAt=moment().utc(moment().format()).format(); 
        var query = {"_id": req.params.id};
        var options = {new: true};
   seqs.findOneAndUpdate(query,info,options,function (err, data) {
          if (err) return next(err);
          res.json(data);
    });

 });
router.get('/perms', security.ensureAuthorized,function(req, res, next) {
 log.debug(req.token);
  if(req.token.type=="SUPER"){
         permissions.aggregate(
           [ 
          /* {
            $project:{
              "_id":1,
              "permissionGroup" :1,
              "subject":1,"action":1,
              "perm":1,"status":1,"order":1
            }
           },{$sort:{"order":1}},*/

           { $group : {_id : "$permissionGroup",  order: { $min: "$order" },
           perms:{$push:{"subject":"$subject","action":"$action",
           "perm":"$perm","status":"$status","value":"$_id","key":
           "$perm","order":"$order"} } }
            }
        ]
        ).sort({"order" : 1}).exec(function(err,data){
            if (err) return next(err);
            console.log(data);
           res.json(data);
        })
    }
});





router.post('/perms', security.ensureAuthorized,function(req, res, next) {
var info=req.body;
if(req.token.type=="SUPER"){
var dao = new permissions(info);
            dao.save(function (err, data) {
            if (err) return next(err);
                    res.json(data);
              });
        }
 
})

router.put('/perms/:id', security.ensureAuthorized,function(req, res, next) {
var info=req.body;
log.debug(info);
if(req.token.type=="SUPER"){
        var id=req.params.id;
        
        var options={"upsert":false,"multi":false};
                   info.updatedAt=moment().utc(moment().format()).format();
                   permissions.update({"_id":id},info,options,function (err, data) {
                        if (err) return next(err);
                            
                            res.json(data);
                      });
                   
       
  }


})

router.put('/users/:id/perms', security.ensureAuthorized, function(req, res, next) {
     var info=req.body;
      if(req.token.type=="SUPER"){
       var options={"upsert":false,"multi":false};
       var id=req.params.id;
       var options = {new: true};

        users.findOneAndUpdate({"_id":id},{"permissions":info.permissions},options,function (err, data) {
                          if (err) return next(err);
                         
                             res.json(data);
                      });
        
      }
 })

router.get('/perms/:id', security.ensureAuthorized, function(req, res, next) {
log.debug(req.body);
  var id=req.params.id;
  var query={"_id":id};
   if(req.token.type=="SUPER"){
      permissions.findOne(query, function (err, data) {
        if (err) return next(err);
          res.json(data);
      });
    }
})

router.get('/chainStores', function(req, res, next) {
     log.debug(req.token);
       chainStores.find({}, function (err, data) {
        if (err) return next(err);
          res.json(data);
      });
     
});
router.get('/chainStores/:id', security.ensureAuthorized,function(req, res, next) {
     log.debug(req.token);
       chainStores.findById(req.params.id, function (err, data) {
        if (err) return next(err);
         res.json(data);
      });
     
});
router.post('/chainStores',  security.ensureAuthorized,function(req, res, next) {
   var info=req.body;
   try{info.merchantIds=info.merchantIds?info.merchantIds.split(","):[]}catch(ex){}
   var arvind = new chainStores(info);
   arvind.save(function (err, data) {
   if (err) return next(err);
          res.json(data);
      });
})
router.put('/chainStores/:id',  security.ensureAuthorized,function(req, res, next) {
var info=req.body;
log.debug(info);
var id=req.params.id;
info.updatedAt=moment().utc(moment().format()).format();
var query = {"_id": id};
var options = {new: true};
 try{info.merchantIds=info.merchantIds?info.merchantIds.split(","):[]}catch(ex){}
 chainStores.findOneAndUpdate(query,info,options,function (err, data) {
          if (err) return next(err);
          res.json(data);
    });
})

router.delete('/chainStores/:id', security.ensureAuthorized,function(req, res, next) {
     chainStores.remove({"_id":req.params.id}, function (err, data) {
        if (err) return next(err);
          res.json(data);
      });
});
router.get('/settings/merchant/id',security.ensureAuthorized,function(req, res, next) {
 
     var query={"merchantId":req.token.merchantId};
     

       settings.find({}).sort( { order: 1 } ).exec(function (err, data) {
        if (err) return next(err);
     
     
         res.json(data);
      });
     
});


router.post('/settings',  security.ensureAuthorized,function(req, res, next) {
 console.log("xxxxxxxxxxxxxxxxxxxxxxxxxx");
   var info=req.body;

   console.log(info);
   console.log("xxxxxxxxxxxxxxxxxddxxxxxxxxx");
   info.operator={};
info.operator.id=req.token.id;
info.operator.user=req.token.user;
 
   var dao = new settings(info);
   dao.save(function (err, data) {
   if (err) return next(err);
          res.json(data);
      });
})
router.put('/settings/:id',  security.ensureAuthorized,function(req, res, next) {
var info=req.body;
  
var id=req.params.id;
info.updatedAt=Date.now();
info.operator={};
info.operator.id=req.token.id;
info.operator.user=req.token.user;

var query = {"_id": id};
var options = {new: true};
 settings.findByIdAndUpdate(id,info,options,function (err, data) {
          if (err) return next(err);
          res.json(data);
    });
})

router.delete('/settings/:id', security.ensureAuthorized,function(req, res, next) {
     settings.remove({"_id":req.params.id}, function (err, data) {
        if (err) return next(err);
          res.json(data);
      });
});
module.exports = router;

/*
info.merchantIds=!!info.merchantIds?info.merchantIds.split(","):[];
info.merchantIds=!!info.merchantIds?info.merchantIds.split(","):[];}catch(ex){}
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


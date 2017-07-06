
var express = require('express'),
    router = express.Router(),
    log = require('../modules/logs'),
    security = require('../modules/security'),
    categories = require('../models/categories'),
    async=require('async'),
   moment=require('moment'),
     tools = require('../modules/tools'),
    stores = require('../models/stores'),
    groups = require('../models/groups'),
    util = require('util'),
    returnData={},
    items = require('../models/items');

router.get('/merchants/id', security.ensureAuthorized,function(req, res, next) {

   

     var query={"merchantId":req.token.merchantId};
     
       categories.find(query).populate({path:'items', options: { sort: { order: 1 }}}).sort({order:1}).exec(function(err, data) {
       /*categories.find(query, function (err, data) {*/
        if (err) return next(err);
       
        res.json(data);
      });
     
});
router.get('/categories/:id', security.ensureAuthorized,function(req, res, next) {

     var query={"category":req.params.id};
     items.find(query).sort( { order: 1 } ).exec(function (err, data) {
        if (err) return next(err);
          res.json(data);
      });
     
});
router.post('/sort',security.ensureAuthorized,  function(req, res, next) {
   var info=req.body;
    
   var arr=info.sortList || [];
   var len=arr.length;
   console.log(info);
   if(len==0){
	   res.json({});
   }else{
   for(var i=0;i<len;i++){
	  
  (function(i) {
					items.findByIdAndUpdate(arr[i],{"order":i},{},function (err, data) {
				 if (err) return next(err);
				 console.log(i);
				   if(i==0){
					 res.json(data);
				 }	 
				  
			 });
        })(i);


	  
   } 	   
   }
})
router.put('/sort/:id', security.ensureAuthorized,function(req, res, next) {
 var query={"category":req.params.id};
        
      var sortJson =req.body;
      console.log(sortJson)
      var len=Object.keys(sortJson).length;
        items.find(query, function(err, data) {
        if (err) return next(err);
        data.forEach(function(value, key) {
            if (sortJson[value._id]) {
                value.order = sortJson[value._id];
                value.save();
                
                console.log(len);
                console.log(key+1);
                if(len==key+1){
                  res.json({"len":key});
                }
            }

        })
        
    });
     
});

router.get('/menus',security.ensureAuthorized,function(req, res, next) {
 	 
 var query={}; query.merchantId="laundry";
    categories.aggregate([
    {
        "$match": {
            "status": "true"
        }
    },
    {
        "$unwind": {
            "path": "$globalOptions",
            "preserveNullAndEmptyArrays": true
        }
    },
    {
        "$lookup": {
            "from": "globaloptiongroups",
            "localField": "globalOptions",
            "foreignField": "_id",
            "as": "globaloptiongroups"
        }
    },
    {
        "$unwind": {
            "path": "$globaloptiongroups",
            "preserveNullAndEmptyArrays": true
        }
    },
    {
        "$group": {
            "_id": "$_id",
            "globaloptiongroups": {
                "$push": "$globaloptiongroups"
            },
            "name": {
                "$first": "$name"
            },
            "merchantId": {
                "$first": "$merchantId"
            },
            "customerOptions": {
                "$first": "$customerOptions"
            },
            "group": {
                "$first": "$group"
            }
        }
    },
    {
        "$addFields": {
            "options": {
                "$setUnion": [
                    "$globaloptiongroups",
                    "$customerOptions"
                ]
            }
        }
    },
      {
        "$project": {
            "_id": 1,
            "name": 1,
            "merchantId": 1,
            "options": 1,
            "group": 1,
        }
    },
    {
        $lookup:
     {
       from: "itemsView",
       localField: "_id",
       foreignField:"category",
       as: 'items_docs'
     }
        
    },{
         $lookup:
     {
       from: "groups",
       localField: "group",
       foreignField:"_id",
       as: 'groups'
     }
    },{
        $unwind:"$groups"
    },{
      $group:{
          "_id":"$groups._id","name":{$first:"$groups.name"},
          categories: {$push: '$$ROOT'}
      }
    }
   ]
,function(err,data){
  res.json(data);

})
 
})
router.get('/group', security.ensureAuthorized,function(req, res, next) {
    
    var query={"merchantId":req.token.merchantId};
    categories.aggregate(
   [
      {
       $match:query
      },
      {
        $lookup:
     {
       from: "items",
       localField: "_id",
       foreignField:"category",
       as: 'items_docs'
     }
      }
   ]
,function(err,data){
  res.json(data);

})
  
     
});
router.get('/:id', security.ensureAuthorized,function(req, res, next) {
     log.debug(req.token);
       items.findById(req.params.id, function (err, data) {
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
    
    var dao = new items(info);

   dao.save(function (err, data) {
   if (err) return next(err);
           // var query={"_id":data.category}
            //var update={ $addToSet: {items: data._id } };
            //categories.findOneAndUpdate(query,update,{},function (err, data2) {
                 // if (err) return next(err);
                   res.json(data);
           // });
         // res.json(data);
      });
 // }
})
router.put('/:id',  security.ensureAuthorized,function(req, res, next) {
   
var info=req.body;
var id=req.params.id;
info.updatedAt=moment().utc(moment().format()).format();
info.operator={};
       info.operator.id=req.token.id;
       info.operator.user=req.token.user;
var query = {"_id": id};
var options = {new: false};
 items.findByIdAndUpdate(req.params.id,info,options,function (err, data) {
          if (err) return next(err);
          res.json(data);
                         
         
    });
})

router.delete('/:id', security.ensureAuthorized,function(req, res, next) {
var info={};
info.updatedAt=moment().utc(moment().format()).format();
info.operator={};
info.operator.id=req.token.id;
info.operator.user=req.token.user;
info.status=moment().utc(moment().format()).format();
 items.findByIdAndUpdate(req.params.id,info,{new: true},function (err, data) {
          if (err) return next(err);
          res.json(data);
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


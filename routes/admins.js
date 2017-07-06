var express = require('express'),
    router = express.Router(),
    log = require('../modules/logs'),
    admins = require('../models/admins'),
    authorizations = require('../models/authorizations'),
    security = require('../modules/security'),
     userRequest = require('../models/userRequest'),moment=require('moment'),
    mailer = require('../modules/mailer'),
     tools = require('../modules/tools'),
    md5 = require('md5'),
    util = require('util'),

    jwt = require('jsonwebtoken'),
    returnData={};
    returnData.success=true;

var permissions=admins.permissions; 
var roles=admins.roles; 
var users=admins.users; 



/**
 * @api {post} /api/admin/login
 * @apiVersion 0.0.1
 * @apiName LOGIN
 * @apiGroup admin
 * 
 * @apiParam {String} loginType   1
 * @apiParam {String} password    123456
 * @apiParam {String} merchantId  U001001

 * @apiSuccess {object} success:true,message:{}
 */

router.post('/loginBak', function(req, res, next) {
  var info=req.body;
  var password=info.password || "";
  var token=info.token || "";
  var query={
      $and:[
         { "merchantIds": {$regex:new RegExp('^'+info.merchantId+'$', 'i')},"status":true}, 
	{ $or:[
           {"password":security.encrypt(md5(password))},
           {"token":security.encrypt(md5(token))}
         ]}
        ]

        
     
   };
      users.aggregate([
      { $match: query},
      { $lookup: {from: 'permissions', localField: 'defaultPerm', foreignField: 'perm', as: 'perms'} },
      ]
      
       ).exec( function (err, result) {
        if (err) return next(err);
          if (!result || result.length<1) return next({"code":"90002"});
          if(result[0].status==false) return next({"code":"90004"});
          users.populate(result,[
         { path:'roles',populate:{ path: 'permissions'}},
         { path:'permissions'}],
          function (err, datas) {
          if (err) return next(err);

           var accessToken = jwt.sign({"merchantId":info.merchantId.toLowerCase(),"id":datas[0]._id,"user":datas[0].userName},req.app.get("superSecret"), {
          expiresIn: '120m',
          algorithm: 'HS256'
          });
          var data=datas[0];
          var perms=data.permissions?data.permissions:[];
                     
            if(!!data.roles){
                for(var j=0;j<data.roles.length;j++) {
                  perms = perms.concat(data.roles[j].permissions);
                }
            }
            if(!!data.perms){
              for(var j=0;j<data.perms.length;j++) {
                  perms = perms.concat(data.perms[j]);
              }
            }
       
          var cloneOfA = JSON.parse(JSON.stringify(perms));
perms=tools.unique5(cloneOfA,"_id");
var jobsSortObject = {}; 
  for(var i =0; i< perms.length; i++){
   var job = perms[i],
   mark = job.permissionGroup+'-'+job.subject,
   jobItem = jobsSortObject[mark];

  if(jobItem){
    
   jobsSortObject[mark]=jobItem+job.perm;
  }else{
   jobsSortObject[mark] = job.perm;
  }
}

var jobsSortObjectList = {}; 
for(var i =0; i< perms.length; i++){
   var job = perms[i],
   mark = job.permissionGroup,
   jobItem = jobsSortObjectList[mark];
  if(jobItem){
   jobsSortObjectList[mark].push(job);
  }else{
   jobsSortObjectList[mark] = [job];
  }
}
         var returnData={};

          returnData.perms=jobsSortObject;
          returnData.permsList=jobsSortObjectList;
          returnData.username=data.userName;
          returnData.storeName=data.storeName;
          returnData.merchantId=info.merchantId;
          returnData.accessToken=accessToken;

          res.json(returnData);
  }); 
        
   });
});
router.post('/authorization',security.ensureAuthorized,function(req, res, next) {
var info=req.body;
var password=info.password || "";
var query={
    $and:[
         { "merchantIds": {$regex:new RegExp(req.token.merchantId, 'i')}},
         {"password":security.encrypt(md5(password))},
         
        ]

};
var perm={
   'action':{
    $regex:new RegExp(info.permission, 'i')
 }
}

users.findOne(query).populate([{path:'permissions',select:'action',match:perm},{path:'roles',populate:{path:'permissions',select:'action',match:perm}}]).
         exec(function (err, data) {
           if (err) return next(err);
          if(!data) return res.send(false);
          var permSign=false;
          if(data.permissions.length>0){
		          permSign=true;
          }else{
          for(var i=0;i<data.roles.length;i++){
        	if(data.roles[i].permissions.length>0){
		            permSign=true;
            break;
           }    
	       }
		
	    
         }
            if(permSign==true){
               var authorizationJson={
                "merchantId":req.token.merchantId,
                "userId":data._id,
                "userName":data.userName,
                 "permission":info.permission,
                 "note":info.note
              }
            var authorizationsDao=new authorizations(authorizationJson);
            authorizationsDao.save();
           }
           res.send(permSign);
             
  }); 
});
router.post('/login', function(req, res, next) {
var info=req.body;
var password=info.password || "";
var token=info.token || "";

var query={
    //$and:[
         //{"merchantIds": {$regex:new RegExp(info.merchantId+'$', 'i')}},
          $or:[
           {"password":security.encrypt(md5(password))},
           {"token":security.encrypt(md5(token))}
         ]
       // ]

};
console.log(info);
console.log("==============");
console.log(query);
console.log(util.inspect(query, false,null));
console.log("==============");
 util.inspect(query, true, 10);
users.findOne(query).populate({path:'permissions'}).populate({path:'roles',populate:{ path: 'permissions'}}).
         exec(function (err, data) {
          if (err) return next(err);
          if (!data) return next({"code":"90002"});
          if(data.status !="true") return next({"code":"90004"});
           var accessToken = jwt.sign({"merchantId":"laundry","id":data._id,"user":data.userName},req.app.get("superSecret"), {
          expiresIn: '13333333320m',
          algorithm: 'HS256'
          });


          var perms=data.permissions?data.permissions:[];
          var permsTemp=[];                   
            if(!!data.roles){
                for(var j=0;j<data.roles.length;j++) {
                  perms = perms.concat(data.roles[j].permissions);
                }
            }
          perms=tools.unique5(perms,"_id");
          var permsLength=perms.length-1;
           for(var k=permsLength;k>=0;k--){
           	if(perms[k].perm<4){}else{
                	permsTemp.push(perms[k].action); 
                }
	   }
        var returnData=JSON.parse(JSON.stringify(data));
        returnData.permissions=permsTemp;

returnData.accessToken=accessToken;
res.json(returnData);
  }); 
});

/**
 * @api {get} /api/admin/perms
 * @apiVersion 0.0.1
 * @apiName permsList 
 * @apiGroup admin
 * 
 * @apiSuccess {object} success:true,message:{}
 */
router.get('/perms', security.ensureAuthorized,function(req, res, next) {
     var merchantId=req.token.merchantId;
      var merchant=new RegExp(merchantId,"i");
       var query= {"$and":
                  [    {"status":true,perm:{$gt:1}},
                       { "$or" : [
                                    {"merchantIds": {$size: 0}},

                                    {"merchantIds":{$regex:merchant}}
                                 ]
                      }
                   ]
                 };

      permissions.aggregate(
           [ {$match:query},
        
         {$sort:{order:1}},
          { $group : {_id : "$permissionGroup",  order: { $min: "$order" },
             perms:{$push:{"subject":"$subject","action":"$action","perm":"$perm","status":"$status","value":"$_id","key":"$perm","order":"$order","merchantIds":"$merchantIds"} } 

            }}
        ]
        ).sort({"order" : 1}).exec(function(err,data){
            if (err) return next(err);

             res.json(data);
        })

});
/**
 * @api {post} /api/admin/perms/:id
 * @apiVersion 0.0.1
 * @apiName get current perms
 * @apiGroup admin
 * 
 * @apiSuccess {object} success:true,message:{}
 */
router.get('/perms/:id', security.ensureAuthorized, function(req, res, next) {
log.debug(req.body);
  var id=req.params.id;
  var query={"_id":id};
         permissions.findOne(query, function (err, data) {
        if (err) return next(err);
         res.json(data);
      });
   
})

/**
 * @api {get} /api/admin/roles
 * @apiVersion 0.0.1
 * @apiName rolesList
 * @apiGroup admin
 * 
 * @apiSuccess {object} success:true,message:{}
 */
router.get('/roles',security.ensureAuthorized, function(req, res, next) {
   var info=req.body;
   log.debug(info);

     var merchantId=req.token.merchantId;

     var select={"name":1,"description":1,"permissions":1,"order":1,"status":1,"key":"$status"};
    roles.aggregate(  
                     [  
                      
                       { $match: {"merchantId":merchantId} },
                         { $project : select }

                     ]
                   ).exec(function(err, data){
                      if (err) return next(err);
                    res.json(data);
                   })
});

router.get('/roles/:id', security.ensureAuthorized, function(req, res, next) {
  var id=req.params.id;
  var query={"_id":id};
         roles.findOne(query, function (err, data) {
        if (err) return next(err);
         res.json(data);
      });
   
})
/**
 * @api {post} /api/admin/role
 * @apiVersion 0.0.1
 * @apiName new role
 * @apiGroup admin
 * 
 * @apiParam {object} roleJson
 * 
 * @apiSuccess {object} success:true,message:{}
 */
router.post('/roles',  security.ensureAuthorized,function(req, res, next) {
var info=req.body;

log.debug(info);
info.operator={};
info.operator.id=req.token.id;
info.operator.user=req.token.user;
    info.merchantId=req.token.merchantId;
    var dao = new roles(info);
      dao.save(function (err, data) {
      if (err) return next(err);
            res.json(data);
                    });
                        
  
})
/**
 * @api {post} /api/roles/:id
 * @apiVersion 0.0.1
 * @apiName update roles
 * @apiGroup admin
 * 
 * @apiParam {object} rolesJson
 * 
 * @apiSuccess {object} success:true,message:{}
 */
router.put('/roles/:id',  security.ensureAuthorized,function(req, res, next) {
var info=req.body;
log.debug(info);
var id=req.params.id;
info.updatedAt=moment().utc(moment().format()).format();

var options = {new: true};
info.operator={};
info.operator.id=req.token.id;
info.operator.user=req.token.user;
roles.findByIdAndUpdate(id,info,options,function (err, data) {
                       if (err) return next(err);
                      
                        res.json(data);
                      });
                        
  
})


router.delete('/roles/:id',  security.ensureAuthorized,function(req, res, next) {
var info={};
 info.status=moment().utc(moment().format()).format().getTime();
 roles.findByIdAndUpdate(req.params.id,info,{new:true},function (err, data) {
          if (err) return next(err);
          res.json(data);
    });
})
/**
 * @api {get} /api/admin/users 
 * @apiVersion 0.0.1
 * @apiName usersList
 * @apiGroup admin
 * 
 * @apiSuccess {object} success:true,message:{}
 */
router.get('/users', security.ensureAuthorized,function(req, res, next) {
  var query={
             "merchantIds":new RegExp(req.token.merchantId,"i"),
             "type":""
            }

     users.find(query,function (err, data) {
        if (err) return next(err);

          res.json(data);
      });
 });

/**
 * @api {post} /api/admin/user
 * @apiVersion 0.0.1
 * @apiName  new user
 * @apiGroup admin
 * 
 * @apiParam {Object} user json
 *
 * @apiSuccess {object} success:true,message:{}
 */
router.post('/users',  security.ensureAuthorized,function(req, res, next) {
var info=req.body;
      info.password=security.encrypt(md5(info.password));
      info.operator={};
      info.operator.id=req.token.id;
      info.operator.user=req.token.user;
      info.merchantIds=[];
      info.merchantIds[0]=req.token.merchantId;
      var dao = new users(info);
          dao.save(function (err, data) {
          if (err) return next(err);
               res.json(data);
      });
  })

router.put('/users/:id',  security.ensureAuthorized,function(req, res, next) {
var info=req.body;
log.debug(info);
var id=req.params.id;
info.updatedAt=Date.now();
if(!!info.password){
if(info.password.length>15){
delete info.password;
}else{
info.password=security.encrypt(md5(info.password));
}
}
var query = {"_id": id};
var options = {new: true};
 info.operator={};
 info.operator.id=req.token.id;
 info.operator.user=req.token.user;
 
try{info.merchantIds=!!info.merchantIds?info.merchantIds.split(","):[];}catch(ex){}
users.findByIdAndUpdate(id,info,options,function (err, data) {
              if (err) return next(err);
                        res.json(data);
});
})
router.delete('/users/:id',  security.ensureAuthorized,function(req, res, next) {
  var query={};
  var id=req.params.id;
  var info={"status":Date.now()};
  users.findByIdAndUpdate(id,info,{"new":true},function (err, data) {
              if (err) return next(err);
                  res.json(data);
      });
})
router.put('/users/resetPwd:/id',  security.ensureAuthorized,function(req, res, next) {
  var query={};
  var id=req.params.id;
  var info={"password":security.encrypt(md5(info.password))};
  users.findByIdAndUpdate(id,info,options,function (err, data) {
              if (err) return next(err);
                  res.json(data);
      });
})

/*router.get('/userstores',function(req, res, next) {
      var info=req.query;
      var query={};
       if(!!info.userName){
         query.userName=info.userName.toLowerCase(); 
       }
        users.find(query,function (err, data) {
        if (err) return next(err);
        returnData.message=data;
        res.json(returnData);
      });
 });
*/
/**
 * @api {post} /api/users/:id/perms
 * @apiVersion 0.0.1
 * @apiName  give user roles,perms
 * @apiGroup admin
 * 
 * @apiParam {object[]} permissions
 * @apiParam {object[]} roles
 * 
 * @apiSuccess {object} success:true,message:{}
 */
router.put('/users/:id/perms', security.ensureAuthorized, function(req, res, next) {
     var info=req.body;
     
       log.info(info);
       log.info(req.params.id);
       var id=req.params.id;
       
       var options = {new: true};
       info.operator={};
       info.operator.id=req.token.id;
       info.operator.user=req.token.user;
        users.findOneAndUpdate({"_id":id},{"permissions":info.permissions,"roles":info.roles},options,function (err, data) {
                          if (err) return next(err);
                            
                            res.json(data);
                      });
        
      
 

})

/**
 * @api {post} /api/admin/roles/:id/perms
 * @apiVersion 0.0.1
 * @apiName LOGIN
 * @apiGroup admin
 * 
 * @apiParam {object[]} permissions.
 * 
 * @apiSuccess {object} success:true,message:{}
 */
router.put('/roles/:id/perms', security.ensureAuthorized, function(req, res, next) {
     var info=req.body;
     var id=req.params.id;
       var options = {new: true};
        info.operator={};
        info.operator.id=req.token.id;
        info.operator.user=req.token.user;
        roles.findOneAndUpdate({"_id":id},{"permissions":info.permissions},options,function (err, data) {
                          if (err) return next(err);
                          
                             
                             res.json(data);
                      });
        
      
 

})




   
                    

module.exports = router;
/*function uniqueArr(array,key) {
    var r = [];
    for (var i = 0, l = array.length; i < l; i++) {
        for (var j = i + 1; j < l; j++)
          if(key){
            if (array[i][key] === array[j][key]) j = ++i;
          }else{
          if (array[i] === array[j]) j = ++i;  
          } 
      r.push(array[i]);
    }
    return r;
}*/

/* var sign=false; 
    if(!!e && e instanceof Array && e.length){
    sign=true;
    }
    User.find({'username': {$regex: new RegExp('^' + username.toLowerCase(), 'i')}}, function(err, res){
    if(err) throw err;
    next(null, res);
});       
    return sign;

 'new_field': { 
                '$add': [ 
                    '$addedPower', 
                    '$addedArmor', 
                    '$monster.power', 
                    '$monster.armor' 
                ]
    */

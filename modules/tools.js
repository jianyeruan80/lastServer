var seqs = require('../models/seqs');
var fs = require('fs');
var path = require('path');

var options={
  
}
var filePath="C:/jayruanwork/app/node/test/test1.rar";
var root_path=path.join(__dirname, '../logs');

module.exports.logsList = function(path) {
  return new Promise(function(resolve, reject) {
         var currentPath = path || root_path;
        var w_content=getAllFiles(currentPath);
        resolve(w_content);
  })
  
}

function getAllFiles(root){
  var res = [] , files = fs.readdirSync(root);
  files.forEach(function(file){
    var pathname = root+'/'+file
    , stat = fs.lstatSync(pathname);

    if (!stat.isDirectory()){
        
       res.push(pathname.replace(root_path+"/",""));
    } else {
       res = res.concat(getAllFiles(pathname));
    }
  });
  return res
}
module.exports.mergeJson=function(obj1,obj2){
var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}
 module.exports.defaultDate=function(n=-4){
  var timeObject= new Date();
    timeObject.setTime(timeObject.getTime() + n * 60 * 60 *1000);
    console.log(timeObject);
    return timeObject;
}
 module.exports.setTime=function(date,sec){ //1*24*60*60*1000
    var hour = (hour || -5 ) * 60 * 1000 * 60;
    var min = (min || 0) * 1000 * 60;
    var sec= sec || 0;
    console.log("xxxxxxxxxxxxx");
    var minSec=hour+min+sec;
 console.log(minSec);
    var timeObject = date || new Date();
    timeObject.setTime(timeObject.getTime() + minSec);
    console.log(timeObject);
    return timeObject;
 }
 module.exports.getNextSequence = function(query) {
  return new Promise(function(resolve, reject) {
            var options = {new: false,upsert: true};
            var rightNow=new Date();
            var dateFormat= rightNow.toISOString().slice(0,10).replace(/-/g,"");
   
 
      seqs.aggregate(
    [ 
   {
    $match:query
   },
     {
       $project: {
           name:"$name",
           seq:"$seq",
           seqStart:"$seqStart",
           seqEnd:"$seqEnd",
           daySign:"$daySign",
           pre:"$pre",
           len:"$len",
           date: { $dateToString: { format: "%Y%m%d", date: "$updatedAt" }},
           dateFormat:{$literal:dateFormat}
       }
     }
   ]
).exec(function (err, data) {
            if (err){reject(err);return false};
            var currentData=data[0] || 1;
            console.log(currentData);
            if(!currentData){reject("");return false};
            var seqNo=currentData.pre || "";
             currentData.seq++

              if(!!currentData.seqEnd && currentData.seqStart && currentData.seqEnd>0 && currentData.seq>currentData.seqEnd){
                    currentData.seq=currentData.seqStart;
              }
              if(currentData.daySign && currentData.date != currentData.dateFormat){
                  currentData.seq=currentData.seqStart;
              }
              if(currentData.len > 1){
                  seqNo+=((Math.pow(10,currentData.len+1)+currentData.seq)+"").substring(1);
              }else{
                seqNo+=currentData.seq;
              }
			  currentData.seq = currentData.seq || 1;
              var update={
                   "seq":currentData.seq,"updatedAt":new Date()
              }
			  seqNo=currentData.seq;
			  console.log(seqNo);
			  console.log(update);
              resolve({"seqNo":seqNo,"updateData":update});
       
})
               
})
};
module.exports.unique5=function(array,key){
  var r = [];
  for(var i = 0, l = array.length; i < l; i++) {
    for(var j = i + 1; j < l; j++)
      if (array[i][key] === array[j][key])j = ++i;
      r.push(array[i]);
  }
  return r;
}
module.exports.upload = function(req, res, next) {
    var fold=req.token.merchantId;
    var photoPath=path.join(__dirname, 'public')+'/'+fold;
    mkdirp(photoPath, function (err) {
        if (err) console.error(err)
        else console.log('pow!')
    });
    var form = new multiparty.Form({uploadDir:  photoPath});
    var  store={};
         store.success=true;
       form.parse(req, function(err, fields, files) {
        store.message=files;
        res.json(store);
     })

}

module.exports.upload = function(req, res, next,fileName) {
var fsImpl = new S3FS('amazondb', options);
var fold=getYearMonthDate();
fsImpl.exists(flod).then(function(files) {
        if(files){
            fsImpl.mkdirp(flod).then(function() {
               fsImpl=new S3FS('amazondb/'+flod, options);

            }) 
        }else{
              fsImpl=new S3FS('amazondb/'+flod, options);

        }
               var fileName=fileName || new Date().getTime();
               var readStream = fs.createReadStream(filePath);
               fsImpl.writeFile(fileName,readStream).then(function(){
                   console.log(reason);
               })
},function(reason) {
  console.log(reason);
        
});
/*    var fold=req.token.merchantId;
    var photoPath=path.join(__dirname, 'public')+'/'+fold;
    mkdirp(photoPath, function (err) {
        if (err) console.error(err)
        else console.log('pow!')
    });
    var form = new multiparty.Form({uploadDir:  photoPath});
    var  store={};
         store.success=true;
       form.parse(req, function(err, fields, files) {
        store.message=files;
        res.json(store);
     })*/

}

function getYearMonthDate(dateStr){
var d=dateStr?new Date(dateStr):new Date();
var date=d.getDate();
date=date>=10?date:'0'+date;
var month=d.getMonth();
month=month>=10?month:'0'+month;
var year=d.getFullYear();
return ''+month+date+year;
}
/*   
  PersonModel.update({_id:_id},{$set:{name:'MDragon'}},function(err){});
Person.findByIdAndUpdate(_id,{$set:{name:'MDragon'}},function(err,person){
      console.log(person.name); //MDragon
    });

PersonSchema.virtual('name.full').set(function(name){
      var split = name.split(' ');
      this.name.first = split[0];
      this.name.last = split[1];
    });
    var PersonModel = mongoose.model('Person',PersonSchema);
    var krouky = new PersonModel({});
    krouky.name.full = 'krouky han';//会被自动分解
    console.log(krouky.name.first);//krouky
db.blog.update(
　　{"comments.author":"jun"},
　　{"$set":{"comments.$.author":"harry"}}    若数组有多个值，我们只想对其中一部分进行操作，就需要用位置或者定位操作符"$"  定位符职匹配第一个，会将jun的第一个评论的名字修改为harry。
)
db.user.update({"name":"jun12"},{"$set":{"email":"jun@126.com"}})
Thing.findOneAndUpdate({_id: key}, {$set: {flag: false}}, {upsert: true, "new": false}).exec(function(err, thing) {
    console.dir(thing);
});
   log.info(info);
       log.info(req.params.id);{ upsert: true }
       var id=req.params.id;
       
        users.findOneAndUpdate({"_id":id},{"permissions":info.permissions,"roles":info.roles},options,function (err, data) {
                          if (err) return next(err);
                            returnData.message=data;
                            res.json(returnData);
                      });
        */

var S3FS = require('s3fs');
var path = require('path');
var fs = require('fs');
var options={

}


var filePath="/usr/share/app/mongotar/ALL.2016112421.tar.gz";
var fsImpl = new S3FS('amazondb', options);
var fileName=getYearMonthDate(true,'A')+'.tar.gz';
var fold=getYearMonthDate();
fsImpl.exists(fold).then(function(files) {
    if(files){
    fsImpl.mkdirp(fold).then(function() {
      fsImpl=new S3FS('amazondb/'+fold, options);
      var readStream = fs.createReadStream(filePath);
         fsImpl.writeFile(fileName,readStream).then(function(){
            console.log("sucessful");
         })
    }, function(reason) {
     console.log(reason);
    });
  }else{
     fsImpl=new S3FS('amazondb/'+fold, options);
       var readStream = fs.createReadStream(filePath);
     fsImpl.writeFile(fileName,readStream).then(function(){
        console.log("sucessful");
      })


  }
}, function(reason) {
  console.log(reason);
});

function getYearMonthDate(sign,pre,dateStr){
var pre=pre || "";
var d=dateStr?new Date(dateStr):new Date();
var date=d.getDate();
date=date>=10?date:'0'+date;
var month=d.getMonth();
month=month>=10?month:'0'+month;
var year=d.getFullYear();
var longStr='-'+d.getHours()+d.getMinutes();
if(sign){
longStr=pre+year+month+date+longStr;
}else{
longStr=pre+year+month+date;
}
return longStr;
}

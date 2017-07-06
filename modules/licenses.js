var security = require('./security');
var crypto = require('crypto');
var key = '7t1f621ea5c8f988';
var iv = '2624b53cl4598718';
/*var key="ezan7jl1306kj6ppieugwg66r";
  var encrypt = function(str) {
  var iv = new Buffer('zeg7wyvbkxtg9zfr');
  var key = new Buffer('c95ad227894374034994e16262a1102b', 'hex');
  var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
  var encryptedStr = cipher.update(new Buffer(str, 'utf8'),'buffer', 'base64');
  encryptedStr += cipher.final('base64');
    return encryptedStr.replace(/\//g, "^");
};

var decrypt = function(str) {
str=str.replace(/\^/g, "/");
var iv = new Buffer('zeg7wyvbkxtg9zfr');
 var key = new Buffer('c95ad227894374034994e16262a1102b', 'hex');
  var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  var chunks = [];
  var decryptedStr = decipher.update(new Buffer(str, 'base64'), 'binary', 'utf8');
  decryptedStr += decipher.final('utf8');
  return decryptedStr;
};*/
var encrypt = function (data) {
   console.log(data);
    var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    var crypted = cipher.update(data, 'utf8', 'binary');
    crypted += cipher.final('binary');
    crypted = new Buffer(crypted, 'binary').toString('base64');
    return crypted;
};
var decrypt = function (crypted) {
   /* try {
    crypted = new Buffer(crypted, 'base64').toString('binary');
    var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    
      var decoded = decipher.update(crypted, 'binary', 'utf8');
      decoded += decipher.final('utf8');
       return decoded;
    }cath(e){
     return e;
    }*/
    try {
  crypted = new Buffer(crypted, 'base64').toString('binary');
    var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    
      var decoded = decipher.update(crypted, 'binary', 'utf8');
      decoded += decipher.final('utf8');
       return decoded;
}
catch (e) {

  return null;
}
finally {
  console.log("entering and leaving the finally block");
}

   
};

module.exports.createLicense=function(info) {
    console.log(info)
return encrypt(JSON.stringify(info));
 }
 module.exports.decryptLicense=function(licenseKey) {
      return decrypt(licenseKey);
}
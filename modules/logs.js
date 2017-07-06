

var winston = require('winston'),
    path = require('path'),
    fs = require('fs'),
    level='info';
var logDirectory =  path.join(__dirname, '../logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
var logName=logDirectory+"/log";
winston.remove(winston.transports.Console);
 winston.add(winston.transports.Console, {'timestamp':true,'colorize':true});
var log = new (winston.Logger)({
  transports: [
// new (winston.transports.Console)({ timestamp:false,json:true}),
    new(require('winston-daily-rotate-file'))({
            level: 'info',
            datePattern: '.yyyy-MM-dd',
            timestamp: false,
            filename: logName,
            maxsize:2*1024*1024,maxFiles:5,
            
        })

  ]
});
module.exports = log;

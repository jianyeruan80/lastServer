
var express = require('express'),
    router = express.Router(),
    log = require('../modules/logs'),
    security = require('../modules/security'),
    navs = require('../models/navs');
    
router.get('/', function(req, res, next) {
       log.debug(req.token);
       settings.find({}, function (err, data) {
        if (err) return next(err);
          res.json(data);
      });
     
});


module.exports = router;


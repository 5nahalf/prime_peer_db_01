var express = require('express');
var router = express.Router();
var path = require('path');
var assignModel = require('../models/assignment')

router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

//this posts to the file done and tested aok
router.post('/', function(req, res, next){
  assignModel.create(req.body, function(err, post){

    res.sendFile(path.resolve(__dirname, '../views/index.html'));
  });
});

/* GET home page. */


module.exports = router;

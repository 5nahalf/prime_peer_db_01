var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var assignModel = require('../models/assignment');

router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

router.get('/assignment/:id', function(req, res, next){
  assignModel.find(function(err, assignment){
    if(err) return next(err);
    res.json(assignment);
  });
});
//this posts to the file done and tested aok
router.post('/', function(req, res, next){
  assignModel.create(req.body, function(err, post){
    if(err) return next(err);
    res.json(assignModel);
  });
});
//this is for the update code done not tested
router.put('/assignment/:id', function(req, res, next) {
  assignModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
//this will delete
router.delete('/assignment/:id', function(req, res, next) {
  assignModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) response.json(err);
    res.json(post);
  });
});


/* GET home page. */


module.exports = router;

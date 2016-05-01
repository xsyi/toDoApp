var express = require('express');
var router = express.Router();
var Todo = require('../models').Todo;
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todos', function(req, res, next) {
  Todo.find({},function(err,docs){
    res.send(docs);
  });
});

router.post('/todos', function(req, res, next) {
  var todo = req.body;
  Todo.create(todo,function(err,doc){
    res.send(doc);
  })
});

router.post('/todos/batch', function(req, res, next) {
  var ids = req.body.ids;
  Todo.remove({_id:{$in:ids}},function(err,doc){
    res.send({});
  })
});

module.exports = router;

var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/test')
var Tasks = db.get('tasks');

router.get('/tasks', function(req, res, next) {
  Tasks.find({}, function(error, tasks) {
    res.json(tasks);
    res.end();
  })
});

router.get('/', function(req, res, next) {
    res.render('index', {title: "To-Do List"});
});

module.exports = router;

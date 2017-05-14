var models  = require('../models');
var express = require('express');
var router  = express.Router();

// create
router.get('/add', function(req, res) {

  console.log('add');
  res.render('bank/add', { title: 'Add Bank' });

});

router.post('/add', function(req, res) {  

  var data = {
    name : req.body.name,
    url: req.body.url
  };

  models.bank.create(data).then(function(data){
    res.redirect('/bank');
  });

});

// read
router.get('/', function(req, res) {

  models.bank.findAll().then(function(banks) {
  	res.render('bank/index', {
  		title: 'Bank List',
  		banks: banks
  	});
  });

});

router.get('/:name', function(req, res) {

	models.bank.findOne({name: req.params.name}).then(function(bank) {
		res.render('bank/show', {
			title: 'Bank',
			bank: bank
		});
	});

});

// update
router.get('/edit/:id', function(req, res) {

  models.bank.findById(req.params.id).then(function(bank) {
    res.render('bank/edit', {
      title: 'Bank',
      bank: bank
    });
  });

});

router.post('/edit/:id', function(req, res, next) {  

  var id = req.params.id;
  
  var data = {
    name : req.body.name,
    url: req.body.url
  };

  models.bank.update(data,{ where : {id : id} }).then(function(data){
    res.redirect('/bank');
  });

});

// delete
router.get('/delete/:id', function(req, res) {

  models.bank.destroy({ where : {id : req.params.id} }).then(function(data){
    res.redirect('/bank');
  });

});

module.exports = router;

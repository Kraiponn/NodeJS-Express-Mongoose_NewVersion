var express = require('express');
var router = express.Router();
var Users = require('../Models/userModel');
var _ = require('lodash')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Users.find({}).sort({firstname: 1}).exec((err, data) => {
      if(err){
          console.log('Error, ' + err);
      }else{
        //res.send('Result:| ' + data);
        res.render('users', {users: data});
      }
  })
});

router.post('/add', (req, res, next) => {
    //console.log(req.body)

    var doc = new Users(req.body)
    doc.save((err, data)=>{
        if(err) console.log(err)
        else{
            res.redirect('/users')
        }
    })
})

router.post('/delete/:_id', (req, res, next) => {
    Users.findByIdAndRemove(req.params._id, (err, resp)=>{
        if(err) console.log(err)
        res.redirect('/users')
    })
})

router.get('/edit/:_id', (req, res, next) => {
    Users.findById(req.params._id, (err, data)=>{
        if(err) console.log(err)
        res.render('users', {user: data})
    })
})

router.post('/edit/:_id', (req, res, next) => {
    Users.findByIdAndUpdate(req.params._id, req.body, (err, data)=>{
        if(err) console.log(err)
        res.redirect('/users')
    })
})

module.exports = router;

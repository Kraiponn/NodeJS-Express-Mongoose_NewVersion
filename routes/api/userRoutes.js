const express = require("express");
const routes = express.Router();
const users = require('../../Models/userModel');

// Get
routes.get('/', (req, res, next)=>{
    users.find().exec((err, data)=>{
        if(err){
            res.status(500).send({ error: { message: err.message, code: err.code } });
        }else{
            res.status(200).send(data);
        }
    })
});

// Get By Id
routes.get('/:_id', (req, res, next)=>{
    users.findById(req.params._id, (err, data)=>{
        if(err){
            res.status(500).send({ error: { message: err.message, code: err.code } });
        }else{
            res.status(200).send(data);
        }
    });
});

// Create
routes.post('/', (req, res, next)=>{
    var doc = new users(req.body);
    doc.save((err, data)=>{
        if(err){
            res.status(500).send({ error: { message: err.message, code: err.code } });
        }else{
            res.status(200).send({ 
                success: { message: "Created user successfully" }
             });
        }
    })
});

// Update
routes.put('/:_id', (req, res, next)=>{
    users.findByIdAndUpdate(req.params._id, req.body, (err, data)=>{
        if(err){
            res.status(500).send({ error: { message: err.message, code: err.code } });
        }else{
            res.status(200).send({ 
                success: { message: "Updated user successfully" }
             });
        }
    })
});

// Delete
routes.delete('/:_id', (req, res, next)=>{
    users.findByIdAndRemove(req.params._id, (err, data)=>{
        if(err){
            res.status(500).send({ error: { message: err.message, code: err.code } });
        }else{
            res.status(200).send({ 
                success: { message: "Deleted user successfully" }
             });
        }
    })
});


module.exports = routes;

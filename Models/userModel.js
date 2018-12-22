const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
         },
         lastname: {
             type: String,
             required: true
         },
         status: {
            type: String,
            required: true,
            enum: ['active', 'pending']
         },
         age: {
            type: Number,
            required: true,
            min: 9,
            max: 60
         },
         created_date: {
            type: Date,
            required: true,
            default: Date.now
         }
    }
);

var users = mongoose.model('users', schema);
module.exports = users;
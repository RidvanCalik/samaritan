const { Timestamp } = require('bson');
const mongoose = require('mongoose');

const todoModel = new mongoose.Schema({
     title:{type:String,required:true},
     description:{type:String,required:true},
     isCompleted:{type:Boolean,required:true},
     date:{type:Date,required:true},
});

module.exports= mongoose.model('Todo',todoModel);
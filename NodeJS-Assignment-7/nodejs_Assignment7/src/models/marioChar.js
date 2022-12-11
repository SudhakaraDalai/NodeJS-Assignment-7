const mongoose = require('mongoose');

const Schema=mongoose.Schema;
//  Your code goes here
const MarioSchema= new mongoose.Schema({
  
    name:{type:String,required: true},
    weight:{type:Number,required: true}
})

const marioModel=mongoose.model("marioModel",MarioSchema)

module.exports = marioModel;
const  mongoose =require("mongoose");

const Service_Category = require("./Service_Category");


const Schema=mongoose.Schema;

const ServiceSchema= new Schema({
    name:{
        type:String,
        required: true,
    },
    
    Service_Category:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Service_Category',
        required: true,
    },
    price:{
        type:Number,
        required: true,
        },
      image:{
        type:String,
        required: true,
      } ,
      description:{
        type:String,
      },        
       
})

module.exports=mongoose.model("Service",ServiceSchema);
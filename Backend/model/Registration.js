const  mongoose =require("mongoose");
const Schema=mongoose.Schema;

const registerSchema= new Schema({
    firstname:{
        type:String,
        required: true,
    },
    lastname:{
        type:String,
        required:true,
        },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required: true,
        minlength: 6,
        
    },
    
})

module.exports=mongoose.model("Registration",registerSchema );
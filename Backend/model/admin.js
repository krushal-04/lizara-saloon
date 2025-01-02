const  mongoose =require("mongoose");



const Schema=mongoose.Schema;

const admin_Schema= new Schema({
    name:{
        type:String,
        required: true,
    },
    password:{
        type:String,
       
    },
    
    
    
        
       
})

module.exports=mongoose.model("admin", admin_Schema);
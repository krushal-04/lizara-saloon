const  mongoose =require("mongoose");



const Schema=mongoose.Schema;

const ServiceCat_Schema= new Schema({
    name:{
        type:String,
        required: true,
    },
    
    Category_name:{
        type:String,
        required: true,
        
    },
    image:{
        type:String,
        
        
    },
    desc:{
        type:String,
    }
    
        
       
})

module.exports=mongoose.model("Service_Category", ServiceCat_Schema);
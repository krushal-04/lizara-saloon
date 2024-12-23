const  mongoose =require("mongoose");



const Schema=mongoose.Schema;

const Category_Schema= new Schema({
    name:{
        type:String,
        required: true,
    },
    
    
    
        
       
})

module.exports=mongoose.model("Category", Category_Schema);
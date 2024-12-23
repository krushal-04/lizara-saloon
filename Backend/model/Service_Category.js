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
    Category_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            
        },
    image:{
        type:String,
        
        
    },
    desc:{
        type:String,
    }
    
        
       
})

module.exports=mongoose.model("Service_Category", ServiceCat_Schema);
const  mongoose =require("mongoose");
const Schema=mongoose.Schema;

const ItemSchema= new Schema({
    image:{
        type:String,
    },
    
    name:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
        },
    is_active:{
        type:Boolean,
        required: true,
        
    },
    desc:{
        type:String,
        required: true,
        
    },
    image:{
        type:String,
    },
    rating:{
     type:Number,
    },
    Category_name:{
        type:String,
        required: true,
        
    },
})

module.exports=mongoose.model("Item",ItemSchema );
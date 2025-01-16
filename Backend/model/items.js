const  mongoose =require("mongoose");
const Category = require("./Category");
const Schema=mongoose.Schema;

const ItemSchema= new Schema({
    
    
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
    Detail:{
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
    Category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        
    }
})

module.exports=mongoose.model("Item",ItemSchema );
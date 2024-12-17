const  mongoose =require("mongoose");
const Schema=mongoose.Schema;

const userSchema= new Schema({
    name:{
        type:String,
        required: true,
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
        maxlength: 12,
    },
    mobileNo:{
        type:Number,
        required: true,
       length:10,
    },
    isActive:{
        type:Boolean,
        default:true,
        
    },
    createon:{
        type:Date,
        default:Date.now,
    },
    updateon:{

        type:Date,
        default:Date.now,
    }
})

module.exports=mongoose.model("User",userSchema );
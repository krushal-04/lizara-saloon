const  mongoose =require("mongoose");
const Item=require("./items")
const User=require("./user")


const Schema=mongoose.Schema;

const bookingSchema= new Schema({
    name:{
        type:String,
        required: true,
    },
    
    Bookdate_from:{
        type:Date,
        required: true,
        
    },
    Bookdate_to:{
        type:Date,
        required: true,
        
    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    item_id:{
    type: Schema.Types.ObjectId,
    ref: 'Item',
    required: true,
},
        
       
})

module.exports=mongoose.model("Booking",bookingSchema );
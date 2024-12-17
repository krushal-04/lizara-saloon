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
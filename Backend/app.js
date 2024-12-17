const express=require("express")
const  mongoose =require("mongoose");
const router = require("./routes/user-routes");
const router1 = require("./routes/item-routes");
const router2=require("./routes/book-routes")
const cors = require("cors")


const app=express();
app.use(cors());


app.use(express.json())
mongoose.
connect(
    "mongodb+srv://system:manager@cluster0.kjg58.mongodb.net/",{ 
        useNewUrlParser:true,
        useUnifiedTopology: true,

    }
)
.then((app.listen(5050,()=>console.log("connected to 5050 port")))
)
.catch((err)=>console.log(err));

app.use("/users",router);
app.use("/item",router1);
app.use("/booking",router2)

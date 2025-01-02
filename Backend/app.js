const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const router1 = require("./routes/item-routes");
const router2 = require("./routes/book-routes");
const router3 = require("./routes/Service_Category-routes");
const router4 = require("./routes/Service-routes");
const router5 = require("./routes/Category-routes");
const admin = require("./routes/admin-route");
const path = require('path');
const cors = require("cors");
const fs = require('fs'); // Import the fs module

const app = express();
app.use(cors());

app.use(express.json());


mongoose.connect(
  "mongodb+srv://system:manager@cluster0.kjg58.mongodb.net/", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(5050, () => console.log("Connected to port 5050")))
  .catch((err) => console.log(err));

// Use the routes
app.use("/users", router);
app.use("/items", router1);
app.use("/booking", router2);
app.use("/Service_Cat", router3);
app.use("/Services", router4);
app.use("/Category", router5);
app.use("/admin", admin);

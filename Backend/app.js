const express = require("express");
const mongoose = require("mongoose");
const router1 = require("./routes/item-routes");
const router2 = require("./routes/book-routes");
const router3 = require("./routes/Service_Category-routes");
const router4 = require("./routes/Service-routes");
const router5 = require("./routes/Category-routes");
const authRoutes = require("./routes/authRoutes");
const user=require("./routes/Registration-routes")
const path = require('path');
const cors = require("cors");

const jwt = require('jsonwebtoken');
const fs = require('fs'); // Import the fs module

const app = express();
app.use(cors());

app.use(express.json());


const JWT_SECRET = 'your-secret-key';
mongoose.connect(
  "mongodb+srv://system:manager@cluster0.kjg58.mongodb.net/", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(5050, () => console.log("Connected to port 5050")))
  .catch((err) => console.log(err));
  
  
  const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(403).json({ message: 'Access denied. No token provided.' });
    }
  
    try {
      // Verify the token using the same secret key
      const decoded = jwt.verify(token, 'your_secret_key');
      req.admin = decoded; // Attach the decoded information to the request object
      next(); // Proceed to the next middleware or route
    } catch (err) {
      return res.status(400).json({ message: 'Invalid token.' });
    }
  };

  app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route', admin: req.admin });
  });

app.use("/items", router1);
app.use("/booking", router2);
app.use("/Service_Cat", router3);
app.use("/Services", router4);
app.use("/Category", router5);
app.use('/auth', authRoutes);
app.use('/User',user)

const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes")
dbConnect();
//middleware
app.use(express.json());

//routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`Server is Running at port ${PORT}` );
})




const mongoose= require("mongoose");
const cors= require("cors");
const  userRouter = require("./router/userRouter");
const express = require("express");
const storeRoute = require("./router/store");
const salesRoute = require("./router/sales");
const cors = require("cors");
const User = require("./models/users");


const app= express();

const PORT =process.env.PORT ||4000;

//CONNECT TO DATABASE

mongoose.connect( process.env.MONGO_URI)
.then (() =>{
    app.listen(PORT,() =>{
        console.log(`server running on port ${PORT}`)
    })
})
.catch((error) => console.log(error))
//middleware
app.use(express.json());
app.use(express.urlencoded({extend : false}));

// Store API
app.use("/api/store", storeRoute);



// Sales API
app.use("/api/sales", salesRoute);
//routes middleware
app.use("/api/users",userRouter)

app.get("/",(req,res)=>{
    res.send("Home page");
})

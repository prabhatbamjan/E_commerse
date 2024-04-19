const express= require("express");
const mongoose= require("mongoose");
const cors= require("cors");
const  userRouter = require("./router/userRouter");
;

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


//routes middleware
app.use("/api/users",userRouter)

app.get("/",(req,res)=>{
    res.send("Home page");
})

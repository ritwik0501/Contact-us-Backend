require("dotenv").config();
const express=require("express");
const contactform = require("./router/contact");
const dbconnect=require("./Database/db");
const homepage = require("./router/homepage-router");
const app=express();

//necessary middleware in place to parse incoming JSON data
app.use(express.json());
//route
app.use("/api",contactform);
app.use("/api",homepage);

dbconnect().then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running ${process.env.PORT}`)
    })
})
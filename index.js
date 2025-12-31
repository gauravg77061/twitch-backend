
const express=require('express');
const http =require('http');
const cors=require('cors');
const dotenv = require("dotenv");


const app=express();

const PORT =process.env.PORT ||process.env.API_PORT


app.use("/",(req,res)=>{
  res.send("Gaurav");
})

app.listen(PORT,()=>{
    console.log("app is listening on port number 5555")
})
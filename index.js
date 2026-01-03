
const express=require('express');
const http =require('http');
const cors=require('cors');
const authRouter = require('./src/routes/authRoute');
const connectDB = require('./src/config/database');
const { error } = require('console');

require("dotenv").config();

const app=express();

const PORT =process.env.PORT ||process.env.API_PORT


app.use(express.json());

app.use(cors());

app.use("/api/auth",authRouter);



const server=http.createServer(app);

connectDB().
then(()=>{
    console.log('Data base connected successfully');

    server.listen(PORT,()=>{
    console.log(`server is running at  ${PORT}`)
})

})
.catch((error)=>{
    console.log("Data base not connected successfully and serer is not running");
    console.error(error);
})


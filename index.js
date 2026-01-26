
const express=require('express');
const http =require('http');
const cors=require('cors');
const cookieParser = require('cookie-parser')
const authRouter = require('./src/routes/authRoute');
const settingsRouter=require('./src/routes/settingRoute');
const channelRouter=require('./src/routes/channelRoute')

const connectDB = require('./src/config/database');
const { error } = require('console');
const profileRouter = require('./src/routes/profileRoute');



require("dotenv").config();

const app=express();

const PORT =process.env.PORT ||process.env.API_PORT


app.use(express.json());

app.use(cors({
     origin:'http://localhost:5173',
    credentials:true,
}));




app.use(cookieParser());

app.use("/api/auth",authRouter);
app.use("/api/channel",channelRouter);
app.use("/api/settings",settingsRouter);
app.use("/api/profile",profileRouter);




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


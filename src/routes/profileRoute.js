const express=require('express');
const userAuth = require('../middlewares/auth');


const profileRouter=express.Router();

profileRouter.get('/view',userAuth,async(req,res)=>{
    try {
        const user=req.user;
        if(!user){
            return res.status(400).send("User not present");

        }
        return res.status(200).send(user);
    } catch (error) {
        res.status.send(error.message);
    }
});

module.exports=profileRouter;
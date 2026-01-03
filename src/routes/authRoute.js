const express=require('express');
const joi =require('joi');
const expressValidator = require("express-joi-validation");
const {postLogin,postRegister} =require('../controllers/controllers');
const authRouter=express.Router();
const eValidator= expressValidator.createValidator({});

const registerSchema=joi.object({
    firstName:joi.string().min(6).max(18).required(),
    lastName:joi.string().min(1).max(18),
    userName: joi.string().min(6).max(12).required(),
    password:joi.string().min(6).max(18).required(),
    emailId:joi.string().min(6).max(18).required(),
});
 
const loginSchema=joi.object({
    //userName: joi.string().min(6).max(12).required(),
    password:joi.string().min(6).max(18).required(),
    emailId:joi.string().min(6).max(18).required(),
});

authRouter.post('/register',eValidator.body(registerSchema),postRegister)

authRouter.post('/login',eValidator.body(loginSchema),postLogin);

module.exports=authRouter;

const validator=require('validator');

const User = require("../../models/user");
const bcrypt = require("bcrypt");

const postLogin=async(req,res)=>{

    try {

        const{emailId,password}=req.body;

        //validating email
        if(!validator.isEmail(emailId)){
            throw new Error("Inavalid emild id");
        }

        //finding email id
        const user=await User.findOne({emailId:emailId});

        //if email id not present throw an error 

        if(!user){
            throw new Error('Invalid credentials');
        }

        //validating password that user entered

        const isPassword=await user.validatePassword(password);

        if(!isPassword){
            throw new Error("Invalid credentials");
        }
        else{
            const token= await user.getJwt();

           //console.log(token);
            res.cookie(token);

            return res.status(200).json({user});

        }

        
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }

}

module.exports=postLogin;
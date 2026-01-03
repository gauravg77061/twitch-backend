const mongoose = require('mongoose');
const validator =require('validator');

const UserSchema = new mongoose.Schema({
  firstName:{
        type:String,
        required:true
    },
    lastName:{
        type :String
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator(value){
                if(!validator.isEmail(value)){
                    throw new Error ("Invalid email");
                }
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate:{
            validator(value){
                if(!validator.isStrongPassword(value)){
                    throw new Error("Password is not strong");
                }
            }
        }
    },
    userName:{
        type:String,
        required:true
    }
},{timestamps:true})

const User=mongoose.model("User",UserSchema);

module.exports=User;
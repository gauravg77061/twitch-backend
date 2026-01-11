const User = require("../../models/user");
const Channel=require("../../models/channel");

const bcrypt = require("bcrypt");

const postRegister=async(req,res)=>{
    try {

        //fetcching req from he body
        const{firstName,lastName,emailId,password,userName}=req.body;

        // checking email is present or not 
        const userExist= await User.findOne({emailId});

        if(userExist){
            return res.status(400).send("E-mail already in use")
        }

        //passeord -> encrypted password
        const encryptedPassword = await bcrypt.hash(password,10);

        //create channel for the user

        const newChannel =await Channel.create({});

        // creating new User
        const user=new User({
            firstName,
            lastName,
            emailId,
            userName,
            password:encryptedPassword,
            channel:newChannel._id,
            
        })

        const savedUser=await user.save();

        // getting this token from User model where I am creating JWT sign() function
        const token=await user.getJwt();


        //putting this tokeninto cookie 

        //res.cookie("token", token);

        res.cookie("token", token);


        return res.status(200).json({data:savedUser})
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Error occured. Please try again after sometime")
    }
}
module.exports=postRegister
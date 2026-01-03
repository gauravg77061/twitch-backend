const User = require("../../models/user")
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

        // creating new User
        const user=new User({
            firstName,
            lastName,
            emailId,
            userName,
            password:encryptedPassword,
            
        })

        const savedUser=await user.save();
        res.status(200).send("User added successfully");
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Error occured. Please try again after sometime")
    }
}
module.exports=postRegister
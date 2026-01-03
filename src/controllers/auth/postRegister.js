const User = require("../../models/user")

const postRegister=async(req,res)=>{
    try {

        const{firstName,lastName,emailId,password,userName}=req.body;

        const userExist= await User.findOne({emailId});

        if(userExist){
            return res.status(400).send("E-mail already in use")
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).send("Error occured. Please try again after sometime")
    }
}
module.exports=postRegister
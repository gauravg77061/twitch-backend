const User = require("../../models/user")

const postRegister=async(req,res)=>{

    const user = await User.create({
        userName:"gauravece077",
        firstName:"Gaurav",
        lastName:"gupta",
        emailId:"gaurav@gmail.com",
        password:"Gaurav@123"
    })

    return res.send("User added successfully");
}
module.exports=postRegister
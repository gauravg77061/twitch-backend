const bcrypt=require('bcrypt');
const User=require('../../models/user')

const patchUpdatePassword= async(req,res)=>{
    try {

        const {_id}=req.user;

        const{password,newPassword}=req.body;

        const user=await User.findById(_id,{password:1});

        const isPasswordCorrect = await bcrypt.compare(password,user.password);

        if(!isPasswordCorrect){
            return res.status(400).send('Invalid password. Please try again');
        }

        const encryptedPassword=await bcrypt.hash(newPassword,10);

        await User.updateOne({_id},{password:encryptedPassword});

        return res.status(200).send('password changed successfully');

       
        
    } catch (error) {
        console.error(error);
        return res.status(500).send("Something went wrong"); 
    }
}
module.exports=patchUpdatePassword;
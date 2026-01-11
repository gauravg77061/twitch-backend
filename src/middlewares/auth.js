const jwt=require('jsonwebtoken');
const User=require('../models/user');


const userAuth=async(req,res,next)=>{

    try {

         const token = req.cookies?.token;
       // console.log(req.cookies);
       // console.log(token);
        
        if(!token){
            return res.status(401).send("Please Login");
        }

        const decodedMessage= await jwt.verify(token,"Twitch@streaming$790")
        
        const{_id}=decodedMessage;
//console.log(_id);
        const user=await User.findById(_id);

        //console.log(_id);

        if(!user){
            throw new Error("Some thing went wrong ");
        }

        req.user=user;

        next();
    } catch (error) {
        res.status(400).send("Error message"+error.message);
    }

}


module.exports=userAuth;


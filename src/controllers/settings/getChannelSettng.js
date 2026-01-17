const User=require('../../models/user')

const getChannelSettings=async(req,res)=>{

    try {

        const userId=req.user._id;

        const userData=await User.findById(userId,{
            channel:1,
            userName:1,
        }).populate("channel");

        //console.log(userData);

        return res.status(200).json({
            id:userData.channel._id,
            userName:userData.userName,
            title:userData.channel.title,
            description:userData.channel.description,
            avatarUrl:userData.channel.avatarUrl,
            streamKey:userData.channel.streamKey,
        })


        
      
        
    } catch (error) {
        return res.status(400).send("something wwent wrong",error.message);
    }

}
module.exports=getChannelSettings;
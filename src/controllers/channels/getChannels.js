const User=require('../../models/user');
const getChannels= async (req,res)=>{
    try {
        
        const users=await User.find({},

            {
                channel:1,
                userName:1,
            }
         ).populate("channel");

         const channels = users
           .filter((u) => u.channel.isActive)
         .map((user) =>{
            return {
                id:user.channel._id,
                title:user.channel.title,
                avatarUrl:user.channel.avatarUrl,
                description:user.channel.description,
                userName:user.userName,
                isOnline:false,
                streamKey: user.channel.streamKey,  
            };
         })

         return res.status(200).json({channels})

    } catch (error) {
        console.error(error.message);
         res.status(400).send("something went wrong");
    }
}

module.exports=getChannels;
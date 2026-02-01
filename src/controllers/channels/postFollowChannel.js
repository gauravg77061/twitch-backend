const User=require('../../models/user');

const postFollowChannel=async(req,res)=>{
    try {

        const {_id}=req.user;

        const {channelId}=req.params; 

        console.log("userId",_id);
        console.log("channelId",channelId);

        const user=await User.findById(_id, {followedChannels:1});

        if(user.followedChannels.includes(channelId)){
            return res.status(400).send("you are already following this channels")
        }

        user.followedChannels.push(channelId);

        await user.save();

        return res.status(200).send('Channel followed successfully');

        
       
    } catch (error) {
        console.error(error.message);
        return res.status(500).send(error.message);
    }
}
module.exports=postFollowChannel;